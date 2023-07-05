import React from 'react'
import styles from '../../src/styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link'
import Rating from '../Rating';
import { Typography } from 'antd';
const { Text } = Typography;
export default function TopDeals() {
	return (
		<div className='container mx-auto flex flex-col items-center my-20'>
			<h2 className='font-semibold text-5xl mb-12 text-center'>
				Featured Products
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 w-full '>
				<Link href={'/ingredient/hair'}>

					<div className={styles.card} hoverable style={{ padding: 0 }}>
						<Image
							src="/images/products/product1.png"
							alt=''
							sizes="100vw"
							width={290}
							height={290}
						/>
						<h3>Bobbi Brown Crushed Shine Jelly Stick Lipstick</h3>
						<Rating rating={2} />
						<Text className={styles.price}>(5)</Text>

						<div>
							<Text className={styles.text}>$</Text>
							<Text className={styles.price}>{20}</Text>
							<Text className={styles.text}>onwards</Text>
						</div>
					</div>
				</Link>
				<Link href={'/ingredient/hair'}>

				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src="/images/products/product2.png"
						alt=''
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>Hair</h3>
					<Rating rating={2} />
					<Text className={styles.price}>(4)</Text>

					<div>
						<Text className={styles.text}>$</Text>
						<Text className={styles.price}>{20}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
				</Link>
				<Link href={'/ingredient/hair'}>

				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src="/images/products/product1.png"
						alt=''
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>Bobbi Brown Crushed Shine Jelly Stick Lipstick</h3>
					<Rating rating={5} />
					<Text className={styles.price}>(3)</Text>

					<div>
						<Text className={styles.text}>$</Text>
						<Text className={styles.price}>{20}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
				</Link>
				<Link href={'/ingredient/hair'}>

				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src="/images/products/product2.png"
						alt=''
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>Bobbi Brown Crushed Shine Jelly Stick Lipstick</h3>
					<Rating rating={2} />
					<Text className={styles.price}>(4)</Text>

					<div>
						<Text className={styles.text}>$</Text>
						<Text className={styles.price}>{20}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
				</Link>
				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src="/images/products/product1.png"
						alt=''
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>Hair</h3>
					<Rating rating={2} />
					<Text className={styles.price}>(4)</Text>

					<div>
						<Text className={styles.text}>$</Text>
						<Text className={styles.price}>{20}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<Image
						src="/images/products/product2.png"
						alt=''
						sizes="100vw"
						width={290}
						height={290}
					/>
					<h3>Hair</h3>
					<Rating rating={2} />
					<Text className={styles.price}>(4)</Text>

					<div>
						<Text className={styles.text}>$</Text>
						<Text className={styles.price}>{20}</Text>
						<Text className={styles.text}>onwards</Text>
					</div>
				</div>
			</div>
		</div>
	)
}
