import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/pages/Seller_Dashboard/Dashboard'
import AddProducts from '../seller/pages/products/AddProducts'
import Orders from '../seller/pages/orders/Orders'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import Transaction from '../seller/pages/Transaction/Transaction'
import Products from '../seller/pages/products/Products'

const SellerRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/ ' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/add-product' element={<AddProducts />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/account' element={<Profile />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/transaction' element={<Transaction />} />
            </Routes>
        </>
    )
}

export default SellerRoutes