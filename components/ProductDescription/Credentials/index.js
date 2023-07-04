//Ant Design
import { Row } from 'antd';

//Nextjs components

//Styles
import styles from './styles.module.css';

//Data
const CredentialsItems = [
	{ id: 1, img: '/images/icons/crediential.png', title: 'Made In USA' },
	{
		id: 1,
		img: '/images/icons/crediential.png',
		title: 'No chinese raw materials',
	},
	{
		id: 1,
		img: '/images/icons/crediential.png',
		title: 'No Arsenic lead or mercury',
	},
	{ id: 1, img: '/images/icons/crediential.png', title: 'FDA approved' },
	{ id: 1, img: '/images/icons/crediential.png', title: 'No child labor' },
];

export default function Credentials({prodcutDetail}) {
	// const { credentials =[] } = prodcutDetail;
	return (
		<Row className={styles.credentials}>
			<h2 className='font-bold'>Credentials</h2>
			<div>
				{CredentialsItems?.map((item) => {
					return (
						<>
							<div className={styles.credentialsItem} key={item.id}>
								<p>{item.title}</p>
							</div>
						</>
					);
				})}
			</div>
		</Row>
	);
}
