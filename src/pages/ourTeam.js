import styles from "../styles/styles.module.css";
//Ant cesign
import { Row } from 'antd';

//Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import WorkinTeam from '../../components/Team/WorkinTeam'


function Terms() {
    return (
        <div>
            <Navbar />
            <div className='min-h-[60vh] mb-16'>
                <div className={styles.container} >
                    <Row className={styles.row}>
                        <h1 className='font-semibold text-5xl mb-12 text-center' style={{fontSize:'36px'}}>Our Team</h1>
                   
                        <WorkinTeam />
                    </Row>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Terms;
