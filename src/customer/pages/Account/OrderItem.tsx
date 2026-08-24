import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <>
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
        <div className='flex items-center gap-5'>
            <div className=''>
                <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
                    <ElectricBolt/>
                </Avatar>
            </div>
            <div>
                <h1 className="font-bold text-primary">PENDING</h1>
                <p>Arriving By Mon,15 Jul</p>
            </div>
        </div>
        <div className='p-5 bg-teal-50 flex gap-3'>
            <div className=''>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce_t5rdBPbJOS8XH2txZZb4bTP950hyz0co--tAxOJwx5WUvDk093_9U&s=10" className='w-[70px] ' alt="" />
            </div>
            <div className='w-full space-y-2'>
                <h1 className='font-bold'>Virani Trafers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe!</p>
                <p><strong>Lorem, ipsum.</strong> Free</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default OrderItem