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
                        <h1 className="text-center ">Our Team</h1>
                        {/* <p className={styles.p}>
                How do you manage your favorites?
                <br></br>
                <br></br>
                Favoland is an aggregator aimed at the beauty industry. We help people
                with real-time information, insights, and intelligence about their a
                favorite brands, products, features, ingredients, textures, and more.
                <br></br>
                <br></br>
                Favoland strives to bring transparency and product authenticity to the
                supply chain. We will connect consumers to their favorite
                brands/retailers to; shop, compare prices, find similar products,
                track sales history (promotions), authenticate products, and
                ingredients well connecting and bringing intelligence (discontinued
                styles, replacement products, recalls, warranties) regards to brands
                and products, along with brand or product news information.
                <br></br>
                <br></br>
                We will allow brands to connect to their products, update information,
                list ingredients, ethics, policies, and provide transparency to the
                consumer. Brands will also have the ability to engage with their
                consumers through feedback, questionnaires, polling, product concept
                or service validation, customer satisfaction, marketing, and
                advertising,
                <br></br>
                <br></br>
                Our long-term goal is to be a fully vertical online retailer to meet
                the ever changing and maturing consumer needs.
                <br></br>
                <br></br>
                Favoland is looking for consumers, beauty professionals, brands,
                retailers, and press to share our passion for product, people and the
                beauty industry.
            </p> */}
                        <WorkinTeam />
                    </Row>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Terms;
