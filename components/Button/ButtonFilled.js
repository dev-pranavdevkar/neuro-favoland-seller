//Nextjs components
import Link from 'next/link';

//Styles
import styles from './styles.module.css';

export default function ButtonFilled(props) {
	return (
		<Link
			className={styles.signup}
			href={props.link === undefined ? '#' : props.link}
			onClick={() => props?.onclick()}
		>
			{props.icon !== undefined && (
				<div className={styles.icon}>{props.icon}</div>
			)}
			{''}
			{props.title}
		</Link>
	);
}
