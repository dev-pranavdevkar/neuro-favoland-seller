import React from 'react'

export default function Info() {
    return (
        <div className='px-20 mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  '>
                <div className=" flex flex-col justify-center items-center rounded-xl p-6   infoPara">
                    <p>Favoland allows beauty product manufactures to promote their products to the growing number of consumers with specific needs and priorities. For a small annual listing fee, your products will be featured on Favoland.com and enable people to find the ones matching their requirements.</p> <br />
                    <p>Globally, over 70% of beauty product buyers have specific needs based on skin conditions, allergies, religious beliefs, dietary preferences or concerns over the environment or the welfare of animals or workers. Our mission is to make it easy for users to find products that cater to these needs and to showcase brands like yours that live up to the highest standards of safety and ethical practice.</p> <br />
                    <p>Favoland.com includes information about product ingredients, traceability, sustainability and ethics, provided by you and verified by our scientists. Some consumer care about all these dimensions. Others are just looking for products that match the one criterion that concerns them. Listing your products on Favoland ensures that anyone for whom your products are relevant, is likely to buy them. We include a link to your e-commerce site and your authorized retailers so people can buy your products immediately.</p> <br />
                    <p>By signing up with Favoland, you are showing the public, and the industry, that you are proud of your products and how they are made. Boost sales, help us improve the reputation of the industry and give consumers the transparency they need by partnering us now at the start of the Favoland journey.</p>
                </div>


                <div className="flex flex-col items-center justify-center   p-6   static">
                    <div >

                        <div className='relative' style={{ width: '29.37rem', height: '16.85rem', border: '5px solid #212121', top: '220px' }}>
                        </div>
                        <div className='z-50 relative' style={{ width: '29.37rem', height: '16.85rem', left: '50px' }}>

                            <img src="/images/modal2.jpg" alt="" />
                        </div>
                        <div className=' relative' style={{ width: '29.37rem', height: '16.85rem', bottom: '177px', left: '90px', border: '5px solid #212121' }}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
