import React from 'react'
import  "./shopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>

        <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary'>
            <img className='rounded-full group-hover:scale-95 transition-transform duration-700 object-cover object-top h-full w-full'
             src="https://www.shutterstock.com/image-photo/women-entrepreneur-wearing-saree-full-260nw-2590372043.jpg" alt="" />
        </div>

        <h1>Women Saree</h1>
    </div>
  )
}

export default ShopByCategoryCard