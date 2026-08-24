import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';
import Orders from './Orders';
import PaymentIcon from '@mui/icons-material/Payment';

const OrderDetails = () => {
    const navigate=useNavigate();
  return (
    <>
    <Box className='space-y-5'>
        <section className='flex flex-col gap-5 justify-center items-center pt-5'>
            <img className='w-[100px]' src="https://www.fabfunda.com/product-img/women-wear-beautiful-blue-soft4-1719036248.jpeg" alt="" />
            <div className='text-sm space-y-1 text-center'>
                <h1 className='font-bold'>Virani Trafers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe!</p>
                <p><strong>Lorem, ipsum.</strong> Free</p>

            </div>
            <div>
                <Button onClick={()=>navigate(`/reviews/${5}/create`)}>WRITE REVIEW</Button>
            </div>
        </section>

        <section className='border p-5'>
            <OrderStepper orderStatus={"SHIPPED"}/>
        </section>
        <div className="border p-5">
            <h1 className='font-bold pb-3'>Delivery Address</h1>
            <div className='text-sm space-y-2 '>
                <div className='flex gap-5 font-medium'>
                    <p>name</p>
                    <Divider flexItem orientation='vertical'/>
                    <p>mobile</p>
                </div>
                <p>
                    address,city,state-pin
                </p>
            </div>
        </div>

        <div className="border space-y-4">
            <div className='flex justify-between text-sm pt-5 px-5'>
                <div className='space-y-1'>
                    <p className='font-bold'>Total Item Price</p>
                    <p>You saved <span className='text-green-500 font-medium text-xs'>200.00</span>on this item</p>

                </div>
                <p className='font-medium'>500</p>
            </div>

            <div className="px-5">
                <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                     <PaymentIcon/>
                     <p>Pay On delivery</p>
                </div>
            </div>

            <Divider/>

            <div className="px-5 p-5">
                <p className='text-xs'><strong>Sold By:</strong>Seller</p>
            </div>
            <div className="p-10">
                <Button
                disabled
               // onClick={handleCancelOrder}
                color='error' sx={{py:"0.7rem"}} className='' variant='outlined' fullWidth
                >
                    {true ? "order cancelled":"Cancel Order"}
                </Button>
            </div>
        </div>
    </Box>
    </>
  )
}

export default OrderDetails