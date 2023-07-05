//Nextjs Components
import Image from 'next/image';
import Link from 'next/link';

//Ant Design
import { Typography } from 'antd';
const { Text } = Typography;

//Styles
import styles from './styles.module.css';

//Components
import Rating from '../Rating';

export default function ProductsCard(props) {
	const { productId, images, rating, price, name } = props;
	return (
		<>
			<Link href={`/product/${productId}`} className={styles.link}>
				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src={images}
						alt={name}
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>{name}</h3>
					<Rating rating={rating} />
					<Text className={styles.price}>({rating})</Text>

					<div>
						{/* <Text className={styles.text}>$</Text> */}
						<Text className={styles.price}>{price}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
			</Link>
		</>
	);
}
