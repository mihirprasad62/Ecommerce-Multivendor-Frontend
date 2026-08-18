import React from 'react'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./Theme/CustomTheme"

const App = () => {
  return (
    
    <ThemeProvider theme={customTheme}>
      <div>
      <Navbar/>

      </div>

    </ThemeProvider>
    
  )
}

export default App