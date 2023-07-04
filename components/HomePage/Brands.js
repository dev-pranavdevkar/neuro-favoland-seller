import { Col, Row } from 'antd';
import BrandsCard from './BrandsCard';

const Brands = () => {
    const categories = [
        {
            id: 1,
            image: '/images/brands/brand1.png',
            name: 'Calvin Klein',
            productCount: '26',
        },
        {
            id: 2,
            image: '/images/brands/brand2.png',
            productCount: '26',
            name: 'Yves Saint Laurent',
        },
        {
            id: 3,
            image: '/images/brands/brand3.png',
            productCount: '26',
            name: 'Tommy Hilfiger ',
        },
        {
            id: 4,
            image: '/images/brands/brand4.png',
            productCount: '26',
            name: 'Redken',
        },
        {
            id: 5,
            image: '/images/brands/brand5.png',
            productCount: '26',
            name: 'Chanel',
        },
        {
            id: 6,
            image: '/images/brands/brand6.png',
            productCount: '26',
            name: 'Hinode',
        },
        {
            id: 7,
            image: '/images/brands/brand7.png',
            productCount: '26',
            name: 'Eudora',
        },
        {
            id: 8,
            image: '/images/brands/brand8.png',
            productCount: '26',
            name: 'L’Oreal',
        },
        {
            id: 9,
            image: '/images/brands/brand9.png',
            productCount: '26',
            name: 'Mary Kay',
        },
        {
            id: 10,
            image: '/images/brands/brand10.png',
            productCount: '26',
            name: 'Nivea',
        },
        // {
        //     id: 11,
        //     image: '/images/brands/brand11.png',
        //     productCount: '26',
        //     name: 'Herbalife',
        // },
        // {
        //     id: 12,
        //     image: '/images/brands/brand12.png',
        //     productCount: '26',
        //     name: 'Givenchy',
        // },
    ];
  return (
    <div className='container mx-auto flex flex-col items-center my-20'>
    <h2 className='font-semibold text-5xl mb-12 text-center'>
    Recognized by big brands
    </h2>
      <div className="flex flex-wrap justify-center">
      <Row className="mt-2 flex justify-center">

      {categories?.map((item) => {
					return (
						<Col key={item.id}>
							<BrandsCard
								image={item?.image}
								productCount={item?.productCount}
								name={item?.name}
							/>
						</Col>
					);
				})}
        </Row>
      </div>
    </div>
  )
}

export default Brands
