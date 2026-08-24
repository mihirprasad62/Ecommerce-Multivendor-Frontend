import React from 'react'
import { Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const CartItem = () => {

    const handleUpdateQuantity = () => {
        //update cart item quantity
    }
    return (
        <>
            <div className='border rounded-md relative'>
                <div className='p-5 flex gap-3'>
                    <div>
                        <img className='w-[90px] rounded-md' src="https://www.fabfunda.com/product-img/women-wear-beautiful-blue-soft-1719038618.jpeg" alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className='font-semibold text-lg'>Virani clothing</h1>
                        <p className='text-gray-600 font-medium text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum.</p>
                        <p className='text-gray-400 text-xs'><strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Ullam, modi.</p>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat.</p>
                        <p className='text-sm text-gray-500'><strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Ullam, modi.</p>
                    </div>


                </div>
                <Divider />

                <div className='flex justify-between items-center'>
                    <div className='px-5 py-2 flex justify-between items-center'>
                        <div className='flex items-center gap-2 w-[140px] justify-between'>
                            <Button disabled={true} onClick={handleUpdateQuantity}>
                                <Remove />
                            </Button>
                            {5}
                            <Button onClick={handleUpdateQuantity}>
                                <AddIcon />
                            </Button>
                        </div>
                    </div>

                    <div className='pr-5'>
                        <p className='text-gray-700 font-medium'>₹799</p>
                    </div>
                </div>

                <div className='absolute top-1 right-1'>
                    <IconButton color='primary'>
                        <CloseIcon/>
                    </IconButton>
                </div>


            </div>
        </>
    )
}

export default CartItem