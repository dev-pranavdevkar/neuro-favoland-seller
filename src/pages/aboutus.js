import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import styles from "../styles/styles.module.css";
//Ant cesign
import { Row } from 'antd';

//Components

const about1 = 'images/modal2.jpg';
const about3 = 'images/traciability.png';
const about2 = 'images/ingredient.png';
const about4 = 'images/tranceperency.png';
const about5 = 'images/ethics.png';
function Terms() {
    return (
        <div>
            <Navbar />
            <div className='min-h-[60vh]'>
                <div className={styles.container} >
                    <Row className={styles.row}>
                        <div className="page-head">
                            <h1 className="mb-40">About Us</h1>
                        </div>                        {/* <p className={styles.p}>
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
                        {/* <div className="flex flex-row "> */}
                        {/* -------------------------------First Row--------------------------------------- */}
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>

                            <div className="flex flex-col justify-center items-center">
                                <div className="section-1">
                                    <h3 className="section-title">
                                        Trust is a brand&apos;s most valuable asset.
                                    </h3>
                                    <div className="title-border mb-40" />

                                    <p className="pt-4">
                                        Favoland is an online beauty database to help you with your
                                        daily purchases of beauty products. We provide you with
                                        intelligence and insights on transparency, ingredients,
                                        traceability, sustainability, and ethics
                                    </p>
                                    <p className="py-3">
                                        Responsible brands increasingly list the full ingredients in
                                        beauty products, despite there being no law in the U.S.
                                        requiring them to do so. A product label can provide
                                        information on the date of production, certifying
                                        organization, types of ingredient processing (such as cold
                                        pressing of oils, hexane extraction, etc.), and the supplier
                                        or country of origin. Offering this level of transparency and
                                        traceability helps to build trust, even if everything isn&apos;t
                                        perfect every time.
                                    </p>
                                </div>
                                <div className="section-2">
                                    <h3 className="section-title">Transparency</h3>
                                    <div className="title-border" />

                                    <p className="pt-4">
                                        Transparency is about full disclosure, not just listing
                                        ingredients. For too long, beauty brands have gotten away with
                                        a horrendous lack of transparency (Honesty & Integrity) over
                                        what&apos;s actually in their products. In the case of beauty or
                                        wellness, it&apos;s providing the full disclosure (accountability)
                                        on processes and ingredients to customers in a way that&apos;s
                                        clear. And in particular – about the things that matter the
                                        most to them. Sharing what the brand is doing well and what
                                        needs to be improved is part of being transparent.Transparency
                                        is about full disclosure, not just listing ingredients. For
                                        too long, beauty brands have gotten away with a horrendous
                                        lack of transparency (Honesty & Integrity) over what&apos;s
                                        actually in their products. In the case of beauty or wellness,
                                        it&apos;s providing the full disclosure (accountability) on
                                        processes and ingredients to customers in a way that&apos;s clear.
                                        And in particular – about the things that matter the most to
                                        them. Sharing what the brand is doing well and what needs to
                                        be improved is part of being transparent.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 pt-0   static">
                                {/* <div className="mt-250" >
                                    <div className="">
                                        <div className="border-box-1"></div>
                                        <img
                                            className="aboutImg"
                                            src={about1}
                                            alt="Image Of Section 1"
                                        />
                                        <div className="border-box-2"></div>
                                    </div>
                                </div> */}
                                <div >

                                    <div className='relative' style={{ width: '29.37rem', height: '16.85rem', border: '5px solid #212121', top: '220px' }}>
                                    </div>
                                    <div className='z-50 relative' style={{ width: '29.37rem', height: '16.85rem', left: '50px' }}>

                                        <img src={about4} alt="" />
                                    </div>
                                    <div className=' relative' style={{ width: '29.37rem', height: '16.85rem', bottom: '221px', left: '90px', border: '5px solid #212121' }}></div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* ----------------------------------Second Row------------------------------------ */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" style={{marginTop: '-150px'}} >
                            <div className="flex flex-col justify-center items-center p-6 pt-0   static">
                                {/* <div className="">
                                    <div className="">
                                        <div className="border-box-1"></div>
                                        <img
                                            className="aboutImg"
                                            src={about2}
                                            alt="Image Of Section 1"
                                        />
                                        <div className="border-box-2"></div>
                                    </div>
                                </div> */}
                                <div className='relative' >

                                    <div className='relative' style={{ width: '29.37rem', height: '16.85rem', border: '5px solid #212121', top: '220px', right: '50px' }}>
                                    </div>
                                    <div className='z-50 relative' style={{ width: '29.37rem', height: '16.85rem',  }}>

                                        <img src={about2} alt="" />
                                    </div>
                                    <div className=' relative' style={{ width: '29.37rem', height: '16.85rem', bottom: '221px', left: '50px', border: '5px solid #212121' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="section-1">
                                    <h3 className="section-title">Ingredients:</h3>
                                    <div className="title-border" />

                                    <p className="pt-4">
                                        Cosmetics are a part of everyday life for both men and women.
                                        Labels that claim products are “green,” “natural,” or
                                        “organic” are unreliable. There is no government agency
                                        responsible for defining or regulating the manufacture of
                                        cosmetics.
                                    </p>
                                    <p>
                                        When choosing beauty products, what&apos;s most important to you?
                                        How it looks, what it does or, what its ingredients are? Or
                                        traceability, transparency, sustainability, and corporate
                                        ethics?
                                    </p>
                                    <p>
                                        There are thousands of different cosmetic products on the
                                        market, all with differing combinations of ingredients. In the
                                        United States alone there are approximately 12,500 unique
                                        chemical ingredients approved for use in the manufacture of
                                        personal care products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------Third Row---------------------------------- */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" style={{marginTop: '-350px'}}>
                            <div className="flex flex-col justify-center items-center">
                                <div className="section-1">
                                    <h3 className="section-title">Sustainability</h3>
                                    <div className="title-border" />

                                    <p className="pt-4">
                                        More than ever before, consumers aren&apos;t interested in your
                                        product — they&apos;re interested in your process.
                                    </p>
                                    <p>
                                        According to Zero Waste Week, more than 120 billion units of
                                        packaging are produced globally every year by the cosmetics
                                        industry, contributing to loss of 18 million acres of forest
                                        annually.
                                    </p>
                                    <p>
                                        As public interest in sustainability continues to climb, many
                                        cosmetic manufacturers are seeking more natural and
                                        environmentally-friendly emulsifiers and ingredients for their
                                        products. The benefits of “green” and “clean” beauty products
                                        extend beyond trends — increasing studies show the toxicity of
                                        conventional cosmetics, and the natural cosmetics market
                                        continues to grow rapidly and consistently.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 pt-0   static">
                                {/* <div className="mt-50">
                                    <div className="">
                                        <div className="border-box-1"></div>
                                        <img
                                            className="aboutImg"
                                            src={about1}
                                            alt="Image Of Section 1"
                                        />
                                        <div className="border-box-2"></div>
                                    </div>
                                </div> */}
                                <div >

                                    <div className='relative' style={{ width: '29.37rem', height: '16.85rem', border: '5px solid #212121', top: '220px' }}>
                                    </div>
                                    <div className='z-50 relative' style={{ width: '29.37rem', height: '16.85rem', left: '50px' }}>

                                        <img src={about1} alt="" />
                                    </div>
                                    <div className=' relative' style={{ width: '29.37rem', height: '16.85rem', bottom: '175px', left: '90px', border: '5px solid #212121' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* ------------------------------------Fourth Row---------------------------------- */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" style={{marginTop: '-250px'}}>
                            <div className="flex flex-col justify-center items-center p-6 pt-0   static">
                                <div className="" >
                                    {/* <div className="">
                                        <div className="border-box-1"></div>
                                        <img
                                            className="aboutImg"
                                            src={about4}
                                            alt="Image Of Section 1"
                                        />
                                        <div className="border-box-2"></div>
                                    </div> */}
                                    <div >

                                    <div className='relative' style={{ width: '29.37rem', height: '16.85rem', border: '5px solid #212121', top: '220px', right: '50px' }}>
                                    </div>
                                    <div className='z-50 relative' style={{ width: '29.37rem', height: '16.85rem',  }}>

                                        <img style={{width:'100%'}} src={about3} alt="" />
                                    </div>
                                    <div className=' relative' style={{ width: '29.37rem', height: '16.85rem', bottom: '210px', left: '50px', border: '5px solid #212121' }}></div>
                                </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="section-1">
                                    <h3 className="section-title">Traceability</h3>
                                    <div className="title-border" />

                                    <p className="pt-4">
                                        Traceability is the process of tracing the origins, movement,
                                        and evolution of products and materials.
                                    </p>
                                    <p>
                                        Traceability means being able to see what is in a product, and
                                        where all the ingredients come from, including how they are
                                        extracted, harvested, or otherwise produced. Ideally, we would
                                        also be able to tell how these raw ingredients are processed
                                        and transported, along every step of the supply chain until
                                        they reach you, the consumer.
                                    </p>
                                    <p>
                                        The point of traceability is to ensure that what we are told
                                        is in a product actually is in the product, and that
                                        responsible sourcing standards are being followed throughout
                                        the manufacturing process. Simply put, without ingredient
                                        traceability there is no sustainability.
                                        <b className="section-subtitle">
                                            {' '}
                                            Traceability allows consumers to ask:
                                        </b>
                                        <ul>
                                            <li>Where is a product manufactured, and by whom?</li>
                                            <li>
                                                What exactly is in this particular batch of a product?
                                            </li>
                                            <li>Where do those ingredients come from?</li>
                                            <li>
                                                How does the sourcing of these ingredients affect workers,
                                                local communities, and the environment?
                                            </li>
                                            <li>
                                                Are the ingredients and processes third-party verified in
                                                any way?
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Using Blockchain we will link together the brands and the
                                        supply chain. Our goals are continuous innovation, improve
                                        productivity, and to keep pace with technology product needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------Fifth Row---------------------------------- */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" style={{maxHeight: '1000px'}}>
                            <div className="flex flex-col  items-center">
                                <div className="section-1">
                                    <h3 className="section-title">Ethics</h3>
                                    <div className="title-border" />

                                    <p className="pt-4">
                                        Business ethics and social responsibility are more important
                                        than ever in the beauty and personal care market. Consumers
                                        are demanding brands to take the lead in business ethics and
                                        social responsibility. It is important that retailers become
                                        aware of and accept their share of responsibility for what
                                        they’re selling to their customers.
                                    </p>

                                    <p>
                                        The need for further transparency. Consumers are demanding
                                        brands to be clear about their product claims, and to develop
                                        a one-to-one relationship where consumers have more control..
                                        <b className="section-subtitle">
                                            {' '}
                                            The beauty industry has been criticized for practices
                                            surrounding:
                                        </b>
                                        <ul>
                                            <li>Greenwashing</li>
                                            <li>Organic</li>
                                            <li>Vegan and/or Vegetarian</li>
                                            <li>Toxic chemicals</li>
                                            <li>Ocean Pollution (Micro Plastics)</li>
                                            <li>Carbon Footprint</li>
                                            <li>Coral Reef Friendly</li>
                                            <li>Forest Friendly</li>
                                            <li>False claims and misleading advertisements</li>
                                            <li>Unethical sourcing of ingredients</li>
                                            <li>Using child labor</li>
                                            <li>Using harmful ingredients</li>
                                            <li>Animal testing</li>
                                            <li>Toxic Excessive packaging (recyclable packaging)</li>
                                        </ul>
                                    </p>
                                    <p>
                                        Using Blockchain we will link together the brands and the
                                        supply chain. Our goals are continuous innovation, improve
                                        productivity, and to keep pace with technology product needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 pt-0   static">
                                    <div className="">
                                        <div className="border-box-1"></div>
                                        <img
                                            className="aboutImg"
                                            src={about5}
                                            alt="Image Of Section 1"
                                        />
                                        <div className="border-box-2"></div>
                                    </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Terms;
