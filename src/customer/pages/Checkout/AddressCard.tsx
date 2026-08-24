import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange=(e:any)=>{
        console.log(e.target.checked)
    }
  return (
    <>
    <div className='p-5 border rounded-md flex'>
        <div>
            <Radio
            checked={true}
            onChange={handleChange}
            value=""
            name="radio-button"
            />
        </div>
        <div className='space-y-3 '>
            <h1>Zosh</h1>
            <p className='w-[320px]'>Kadugodi,Bengaluru,Karnataka-560067</p>
            <p><strong>Mobile</strong>+91 123-456-78-90</p>
        </div>
    </div>
    </>
  )
}

export default AddressCard