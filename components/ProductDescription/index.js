//Ant Design
import { LeftOutlined } from '@ant-design/icons';
import { Row } from 'antd';

//Next js
import Link from 'next/link';

//Components
import Credentials from './Credentials';
import Features from './Features';
import ProductInfo from './ProductInfo';
import ProductIngredients from './ProductIngredients';
import SimilarProducts from './SimilarProducts';

//Style
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import styles from './styles.module.css';

export default function ProductDes(props) {
	const { productId } = props;
	const [prodcutDetail, setProductDetail] = useState();

	//Fetch Product by id
	const specificProdcut = async (id) => {
		await fetch(`https://api.favoland.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => {
				setProductDetail(json);
			});
	};

	useEffect(() => {
		if (productId !== undefined) {
			specificProdcut(productId);
		}
	}, [productId]);

	return (
		<div >
			<Row>
				<Link href="/" className={styles.backbtn}>
					{' '}
					<LeftOutlined /> Back to search results{' '}
				</Link>
			</Row>
			<ProductInfo prodcutDetail={prodcutDetail} />
			<hr />
			<Features />
			<hr />
			<ProductIngredients />
			<hr />
			<Credentials prodcutDetail={prodcutDetail}/>
			<hr />
			<SimilarProducts />
			<hr />
			<Footer />
		</div>
	);
}
