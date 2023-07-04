//Ant Design
import { Col, Row } from 'antd';

//Styles
import styles from './styles.module.css';

export default function Features() {
	return (
		<Row className={styles.features}>
			<h2>Features</h2>
			<Row className={styles.row}>
				<Col>
					<p>
						<strong>Style</strong>
					</p>
					<p>
						<strong>Scent</strong>
					</p>
					<p>
						<strong>Texture</strong>
					</p>
					<p>
						<strong>Feel</strong>
					</p>
				</Col>
				<Col className={styles.rightSide}>
					<p>Stylename</p>
					<p>ScentName</p>
					<p>Texturename</p>
					<p>Feelname</p>
				</Col>
			</Row>
		</Row>
	);
}
