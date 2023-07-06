import Link from "next/link";

const PrimaryButton = ({ bgColor, width, height, text, link, fontSize,fontWeight }) => {
  return (
    <div>
      <Link href={link}>
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: bgColor ? bgColor : "#212121",
          }}
          className={`text-white flex items-center justify-center`}
        >
          <p
            style={{
              color: '#ffffff',
              fontSize: fontSize ? fontSize : "16px",
              fontWeight : fontWeight ? fontWeight : "bold"
            }}
            className=" font-bold"
          >
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PrimaryButton;
