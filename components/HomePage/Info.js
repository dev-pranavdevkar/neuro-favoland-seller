import React from 'react'
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'

export default function Info() {
    return (
        <div className='px-20 mt-0'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ' style={{position: 'relative', bottom: '292px'}}>
                <div className=" flex flex-col justify-center items-start rounded-xl p-6   infoPara">
                    <h3>Welcome to Favoland Marketplace <br /> <span>(Easy to use platform and get more sales)</span> </h3>
                    <br />
                    <p>Favoland allows beauty product manufactures to promote their products to the growing number of consumers with specific needs and priorities. For a small annual listing fee, your products will be featured on Favoland.com and enable people to find the ones matching their requirements.</p> <br />
                    <p>Globally, over 70% of beauty product buyers have specific needs based on skin conditions, allergies, religious beliefs, dietary preferences or concerns over the environment or the welfare of animals or workers. Our mission is to make it easy for users to find products that cater to these needs and to showcase brands like yours that live up to the highest standards of safety and ethical practice.</p> <br />
                    <p>Favoland.com includes information about product ingredients, traceability, sustainability and ethics, provided by you and verified by our scientists. Some consumer care about all these dimensions. Others are just looking for products that match the one criterion that concerns them. Listing your products on Favoland ensures that anyone for whom your products are relevant, is likely to buy them. We include a link to your e-commerce site and your authorized retailers so people can buy your products immediately.</p> <br />
                    <p>By signing up with Favoland, you are showing the public, and the industry, that you are proud of your products and how they are made. Boost sales, help us improve the reputation of the industry and give consumers the transparency they need by partnering us now at the start of the Favoland journey.</p> <br />
                    <p>As a leading beauty brand or retailer, we want you on the Favoland platform to connect with consumers with specific needs.   Consumers will have the ability to look at our third-party reporting system on products, preferences, (coming soon) sustainability, traceability, and ethics.  </p> <br />
                    {/* <h4 className='xl:text-2xl text-2xl font-bold'>Three simple steps to have your products listed on the Favoland Platform:</h4>
                    <ul>
                        <li >Register - Register on our seller platform</li>
                        <li>Products – List and upload details of all your products</li>
                        <li>Sales – Tell us who are your authorized retailers   </li>
                    </ul><br /> */}
                    {/* <h4 className='xl:text-2xl text-2xl font-bold'>The Favoland marketplace is free to use with your subscription.   </h4>
                    <ul>
                        <li>-	Increase your sales</li>
                        <li>-	find new customers</li>
                        <li>-	re-engage with old customers </li>
                    </ul>
                     <br />
                    <p>
                        By being transparent about your company and products on the Favoland platform.   <br />

                        Let Favoland consumers discover, compare and purchase the products that are aligned with their values and personal needs.
                    </p> */}
                    <PrimaryButton
                        bgColor={"#212121"}
                        width={"125px"}
                        height={"32px"}
                        link={"/login"}
                        text={"Sign Up"}
                    />
                </div>


                <div className="flex flex-col items-center justify-center   p-6 pt-0   static">
                    <div >

                        <div className='relative' style={{ width: '40.37rem', height: '25.85rem', border: '5px solid #212121', top: '371px', right: '50px' }}>
                        </div>
                        <div className='z-50 relative' style={{ width: '40.37rem', height: 'auto' }}>

                            <img src="/images/modal2.jpg" alt="" />
                        </div>
                        <div className=' relative' style={{ width: '40.37rem', height: '25.85rem', bottom: '369px', left: '50px', border: '5px solid #212121' }}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
