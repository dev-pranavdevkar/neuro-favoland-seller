

import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';
import ProductDes from '../../../components/ProductDescription';

export default function ProductDetail() {
	const router = useRouter();
	const productId = router.query.productId;
	return (
		<div
>

		<Navbar/>
		<div className='container mx-auto p-5'>
			<ProductDes productId={productId} />
		</div>
</div>
	);
}
