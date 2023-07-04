//Nextjs Components
import Image from 'next/image';

//Ant Design

//Styles

export default function BrandsCard(props) {
	const { image, productCount, name } = props;
	return (
		<>
			<div className='sm:w-44 w-40 sm:m-6 m-3 sm:my-6 my-6 flex justify-center items-center flex-col' hoverable style={{ padding: 0 }}>
				<Image src={image} alt={name} sizes="100vw" width={180} height={24} />
				<h3 className="mt-2 font-extrabold">{name}</h3>
			</div>
		</>
	);
}
