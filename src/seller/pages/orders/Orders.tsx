import React from 'react'
import OrdersTable from './OrdersTable'

const Orders = () => {
  return (
    <>
    <div>
      <h1 className='font-bold mb-5 text-xl'>All Orders</h1>
      <OrdersTable/>
    </div>
    </>
  )
}

export default Orders