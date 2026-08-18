import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import GridCategory from './GridCategory/GridCategory'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectricCategory/>
        <GridCategory/>
        

        <div className='mt-20'>
          <h1 className='text-lg lg:text-4xl font-bold text-primary pb-5 lg:pb-20 text-center'>Today's Deal</h1>
        <Deal/>
        </div>

        <div className='py-20'>
          <h1 className='text-lg lg:text-4xl font-bold text-primary pb-5 lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
        <ShopByCategory/>
        </div>

        <div className='mt-20 lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full'
           src="https://www.shutterstock.com/image-vector/indian-women-wearing-saree-vector-260nw-2428644671.jpg" alt="" />

        <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1.5 font-semibold lg:text-4xl space-y-3'>
        <h1>Sell Your Product</h1>
        <p className='text-lg md:text-2xl'>With<span className='logo'> Zosh Bazzar</span></p>
        
        <div className='pt-6 flex justify-center'>
          <Button variant='contained' size='large'>Become Seller</Button>
        </div>
        
        </div>
        </div>
              
    </div>

    </>
  )
}

export default Home