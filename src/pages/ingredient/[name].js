import React from 'react'
import styles from "../../styles/styles.module.css";
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { useRouter } from 'next/router';
import { Button, Col, Row, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;
import PrimaryButton from '../../../components/PrimaryButton';
import Image from 'next/image';
export default function Category() {
    const router = useRouter()
    const query = router.query.name
    return (
        <div><Navbar />
            <div className='min-h-[60vh] mb-16 my-20 ml-60'>
                <Row className='flex flex-row align-center justify-center '>
                    <Col span={12} className={styles.col}>
                        <div className="logo mb-10">
                            <img src="/images/favolandLogo.png" alt="" />
                        </div>
                        <div>
                            <div className="coming-soon">Coming Soon</div>
                            <Title>Beauty at your fingertips</Title>
                            <Paragraph  style={{fontSize: '18px'}}>
                                Favoland provides real-time information (compare prices, find
                                similar products, track sales history), insights (discontinued
                                styles, replacement products, recalls, warranties), and
                                intelligence (transparency, authenticity) about your favorite
                                brands, products, features, ingredients, textures, and more.
                                <br></br>Register to be notified when the site launches{' '}
                            </Paragraph>
                            <Button type="primary">Notify</Button>
                        </div>
                        <Text>©2023 Favoland</Text>
                    </Col>
                    <Col span={12}  className="item-center">
                        <Image src="/images/img.png" alt="Hero Section" width={500} height={500} />
                    </Col>
                </Row>
            </div>
            <Footer /></div>
    )
}
