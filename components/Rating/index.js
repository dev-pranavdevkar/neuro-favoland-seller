import { Rate } from 'antd';
import { useState } from 'react';

//Style 
import styles from './style.module.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = () => {
	const [value, setValue] = useState(3);

	return (
		<span>
			<Rate
				tooltips={desc}
				onChange={setValue}
				value={value}
				className={styles.rating}
			/>
			{/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
		</span>
	);
};

export default Rating;
