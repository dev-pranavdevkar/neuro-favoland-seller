//Ant Design
import { Col, Row } from 'antd';

//Nextjs components
import Link from 'next/link';

//Components
import ProductsCard from '../../Card/ProductsCard';

//Styles
import styles from './styles.module.css';

//Data
const products = [
	{
		id: 1,
		image: '/images/products/product1.png',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
		rating: '682',
		price: '$20',
	},
	{
		id: 2,
		image: '/images/products/product2.png',
		rating: '682',
		price: '$20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 3,
		image: '/images/products/product3.png',
		rating: '682',
		price: '$20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 4,
		image: '/images/products/product4.png',
		rating: '682',
		price: '$20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 5,
		image: '/images/products/product5.png',
		rating: '682',
		price: '$20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 6,
		image: '/images/products/product6.png',
		rating: '682',
		price: '$20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
];
export default function SimilarProducts() {
	return (
		<Row className={styles.similarProducts}>
			<h2>Similar products</h2>
			<Row>
				{products.map((item) => {
					return (
						<Col key={item.id}>
							<ProductsCard
								images={item.image}
								rating={item.rating}
								price={item.price}
								name={item.name}
							/>
						</Col>
					);
				})}
			</Row>
			<Col span={24} className={styles.viewallContainer}>
				<Link className={styles.viewall} href={'#'}>
					View All
				</Link>
			</Col>
		</Row>
	);
}
