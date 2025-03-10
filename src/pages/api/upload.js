import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createRequestPresigner } from '@aws-sdk/s3-request-presigner';
import multer from 'multer';
import nextConnect from 'next-connect';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer();

const handler = nextConnect()
  .use(upload.single('file'))
  .post(async (req, res) => {
    const file = req.file;
    const key = Date.now().toString() + '-' + file.originalname;

    const putParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };

    try {
      await s3.send(new PutObjectCommand(putParams));

      const signedUrl = await createRequestPresigner(s3);
      const url = signedUrl(putParams, { expiresIn: 60 * 60 * 1000 }); // 1 hour

      res.status(200).json({ url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading file to S3' });
    }
  });

export default handler;