//Nextjs components
import Link from 'next/link';

//Styles
import styles from './styles.module.css';

export default function ButtonOutline(props) {
	return (
		<Link
			className={styles.scanProduct}
			href={props.link === undefined ? '#' : props.link}
			onClick={() => props?.onclick()}
		>
			{props.icon !== undefined && (
				<div className={styles.icon}>{props.icon}</div>
			)}{' '}
			{props.title}
		</Link>
	);
}
