import React from 'react'

export default function Categories() {
    return (
        <div className='container mx-auto flex flex-col items-center my-20'>

            <h2 className='font-semibold text-4xl mb-12 text-center'>
                Product By Category
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-2 w-full '>
                <div className='category'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/hair.png" alt="" />
                        <h4 >Hair</h4>
                    </div>


                </div>
                <div className='category' >
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/face.png" alt="" />
                        <h4>Face</h4>
                    </div>
                </div>
                <div className='category' >
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/nails.png" alt="" />
                        <h4>Lips</h4>
                    </div></div>
                <div className='category' >
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/hair.png" alt="" />
                        <h4>Nails</h4>
                    </div>
                </div>
                <div className='category' >
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/face.png" alt="" />
                        <h4>Skin</h4>
                    </div>
                </div>
                <div className='category' >
                    <div className='flex flex-col justify-center items-center'>
                        <img src="images/category/nails.png" alt="" />
                        <h4>Body</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
