import React from 'react'
import Link from 'next/link'
export default function FeaturedProduct() {
    return (
        <div className='container mx-auto flex flex-col items-center my-20'>
            <h2 className='font-semibold text-5xl mb-12 text-center'>
            Featured Products
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-5 w-full '>
                <div className='category'>
                    <Link href={'/ingredient/hair'}>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-full' src="images/category/category.png" alt="" />
                            <h4 >Hair</h4>
                        </div>
                    </Link>


                </div>
                <div className='category' >
                    <Link href={'/ingredient/face'}>

                        <div className='flex flex-col justify-center items-center text-start'>
                            <img className='w-full' src="images/category/face.png" alt="" />
                            <h4>Face</h4>
                        </div>
                    </Link>
                </div>
                <div className='category' >
                    <Link href={'/ingredient/lips'}>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-full' src="images/category/nails.png" alt="" />
                            <h4>Lips</h4>
                        </div>
                    </Link>

                </div>
                <div className='category' >
                    <Link href={'/ingredient/nails'}>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-full' src="images/category/brush.png" alt="" />
                            <h4>Nails</h4>
                        </div>
                    </Link>
                </div>
                <div className='category' >
                    <Link href={'/ingredient/skin'}>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-full' src="images/category/fragnance2.png" alt="" />
                            <h4>Skin</h4>
                        </div>
                    </Link>
                </div>
                <div className='category' >
                    <Link href={'/ingredient/body'}>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-full' src="images/category/nails.png" alt="" />
                            <h4>Body</h4>
                        </div>

                    </Link>

                </div>
            </div>
        </div>
    )
}
