import React from 'react'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./Theme/CustomTheme"
import Home from './customer/pages/Home/Home';
import Deal from './customer/pages/Home/Deal/Deal';
import ShopByCategory from './customer/pages/Home/ShopByCategory/ShopByCategory';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become_Seller/BecomeSeller';
import SellerDashboard from './seller/pages/Seller_Dashboard/SellerDashboard';

const App = () => {
  return (
    
    <ThemeProvider theme={customTheme}>
      <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Review/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Account/> */}
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<Product/>}/>
        <Route path='/reviews/:productId' element={<Review/>}/>
        <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/become-seller' element={<BecomeSeller/>}/>
        <Route path='/account/*' element={<Account/>}/>
        <Route path='/seller/*' element={<SellerDashboard/>}/>
      </Routes>
      

      </div>

    </ThemeProvider>
    
  )
}

export default App