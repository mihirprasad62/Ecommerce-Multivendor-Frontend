import React, { useState } from 'react'
import SellerLoginForm from './SellerLoginForm'
import SellerAccountForm from './SellerAccountForm'
import { Button } from '@mui/material'

const BecomeSeller = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const handleShowPage=()=>{
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <>
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>
           {
           !isLoggedIn?
            <SellerAccountForm/>
            :
            <SellerLoginForm/>
           }

           <div className='mt-10 space-y-2'>
            <h1 className='text-center text-sm font-medium'>Have account</h1>
            <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
                {isLoggedIn?"REGISTER":"LOGIN"}
            </Button>
           </div>
        </section>

        <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
            <div className='lg:w-[70%] px-5 space-y-10'>
                <div className='space-y-2 font-bold text-center'>
                    <p className='text-2xl'>Join MarketPlace Revolution</p>
                    <p className='text-lg text-primary'>Boost your sales today</p>
                </div>
                <img className='
                    w-full
                    h-[400px]
                    lg:h-[500px]
                    object-center
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                ' src="https://5.imimg.com/data5/SELLER/Default/2022/10/FD/FC/NH/137063079/get-now-heavy-vichitra-silk-party-wear-saree-for-women-s-with-blouse-piece.jpg" alt="" />
            </div>
        </section>
    </div>
    </>
  )
}

export default BecomeSeller