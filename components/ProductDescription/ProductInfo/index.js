//Ant Design
import { Row } from 'antd';
import { useState } from 'react';

//Components
import ButtonFilled from '../../Button/ButtonFilled';
import Rating from '../../Rating';

//Styles
import styles from './styles.module.css';

//Nextjs components
import Image from 'next/image';

export default function ProductInfo(props) {
	const { prodcutDetail } = props;
	const [productImage, setProductImage] = useState();

	const [status, setStatus] = useState(false);

	const handelImages = (item) => {
		setProductImage(item);
		setStatus(true);
	};
	return (
		<Row className={styles.row}>
			<div className={styles.ProdcutImageSection}>
				<div className={styles.imageCol}>
					{prodcutDetail?.images?.map((item) => {
						return (
							<Image
								src={item}
								className={styles.productImage}
								onClick={() => handelImages(item)}
								width={90}
								height={90}
								key={item.id}
								alt="Product Image"
							/>
						);
					})}
				</div>
				<div className={styles.productMainImage}>
					<img
						src={status ? productImage : prodcutDetail?.images[0]}
						className={styles.mainImage}
						alt="mainimage"
					/>
				</div>
			</div>
			<div className={styles.productinfo}>
				<h1>{prodcutDetail?.name}</h1>
				<h3 className='capitalize'>
					{prodcutDetail?.type}
				</h3>
				<div>
					<span>
						<strong>{prodcutDetail?.price}</strong> onwords
					</span>
				</div>
				<div>
					<Rating /> <strong>(1122)</strong>
				</div>
				<div className={styles.favorite}>
					<ButtonFilled title="Favorite" />
				</div>
				<p className={styles.p}>{prodcutDetail?.description}</p>
				<p className={styles.p}>
				</p>
			</div>
		</Row>
	);
}
