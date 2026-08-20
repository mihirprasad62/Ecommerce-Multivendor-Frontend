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

const App = () => {
  return (
    
    <ThemeProvider theme={customTheme}>
      <div>
      <Navbar/>
      {/* <Home/> */}
      <Product/>
      

      </div>

    </ThemeProvider>
    
  )
}

export default App