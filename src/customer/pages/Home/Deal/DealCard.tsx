import React from 'react'

const DealCard = () => {
  return (
    <div className='w-60 cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-48 object-cover object-center'
         src="https://static.vecteezy.com/system/resources/thumbnails/045/642/920/small/top-female-model-seated-on-chair-and-posing-for-the-camera-while-wearing-a-saree-photo.jpg" alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Silk saree</p>
             <p className='text-2xl font-bold'>20% OFF</p>
              <p className='text-balance text-lg'>shop Now</p>
        </div>
    </div>
  )
}

export default DealCard