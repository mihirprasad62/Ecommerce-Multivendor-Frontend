import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Pages/sellers/SellersTable'
import Coupon from '../admin/Pages/coupon/Coupon'
import AddNewCouponForm from '../admin/Pages/coupon/AddNewCouponForm'
import GridTable from '../admin/Pages/Home/GridTable'
import ElectronicTable from '../admin/Pages/Home/ElectronicTable'
import ShopByCategoryTable from '../admin/Pages/Home/ShopByCategoryTable'
import Deal from '../admin/Pages/Home/Deal'

const AdminRoutes = () => {
  return (
     <>
            <Routes>
                <Route path='/ ' element={<SellersTable/>} />
                <Route path='/coupon' element={<Coupon />} />
                <Route path='/add-coupon' element={<AddNewCouponForm />} />
                <Route path='/home-grid' element={<GridTable />} />
                <Route path='/electronics-category' element={<ElectronicTable />} />
                <Route path='/shop-by-category' element={<ShopByCategoryTable />} />
                <Route path='/deals' element={<Deal />} />
            </Routes>
        </>
  )
}

export default AdminRoutes