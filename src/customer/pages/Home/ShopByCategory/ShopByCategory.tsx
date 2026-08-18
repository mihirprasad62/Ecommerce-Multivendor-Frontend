import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
         {[1, 2, 3, 4, 5, 6, 7,1,1,1,1,1,1,1,1].map((item) => (
        <ShopByCategoryCard key={item} />
      ))}
        
    </div>
  )
}

export default ShopByCategory