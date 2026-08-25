import React from 'react'
import ProfileFieldCard from '../../../components/ProfileFieldCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <>
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className="items-center pb-3 justify-between">
                <h1 className='text-2xl font-bold text-gray-600'>Personal details</h1>
            </div>
            
            <div className='space-y-5'>
                <ProfileFieldCard label={"Name"} value={"Mihir"}/>
                <Divider/>
                <ProfileFieldCard label={"Email"} value={"mihirprasad@gmail.com"}/>
                <Divider/>
                <ProfileFieldCard label={"Mobile"} value={"1234567890"}/>
            </div>
        </div>

    </div>
    </>
  )
}

export default UserDetails