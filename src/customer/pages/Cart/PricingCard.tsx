import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'

const PricingCard = () => {
  return (
    <>
    <div className='space-y-3 p-5'>
      <div className='flex justify-between items-center'>
         <span>Subtotal</span>
         <span>₹ 899</span>
      </div>

       <div className='flex justify-between items-center'>
         <span>Discount</span>
         <span>₹ 899</span>
      </div>

       <div className='flex justify-between items-center'>
         <span>Subtotal</span>
         <span>₹ 899</span>
      </div>
       <div className='flex justify-between items-center'>
         <span>Shipping</span>
         <span>₹ 899</span>
      </div>

      <div className='flex justify-between items-center'>
         <span>Platform fee</span>
         <span>free</span>
      </div>

      
    </div>
    <Divider/>
      <div className='flex justify-between items-center p-5 text-primary'>
         <span>Total</span>
         <span>₹ 899</span>
      </div>
    </>
  )
}

export default PricingCard