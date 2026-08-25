import React, { useState } from 'react'
import { Avatar, Box, Button, IconButton, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Storefront } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategorySheet from './CategorySheet';
import { rootCategory } from "../../data/category/mainCategory";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);
    const navigate=useNavigate()
    return (
        <>

            <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>

                <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>

                    <div className='flex items-center gap-5'>

                        <div className='flex items-center gap-2'>
                            {!isLarge && <IconButton>
                                <MenuIcon />

                            </IconButton>}


                            <h1 onClick={()=>navigate("/")} className='logo cursor-pointer text-lg md:text-2xl text-[#00927c]'>Zosh Bazar</h1>
                        </div>
                        {/* categories */}
                        <ul className="flex items-center font-medium text-gray-800 cursor-pointer">
                            {rootCategory.map((item) => (
                                <li
                                    onMouseLeave={() => {
                                        setShowCategorySheet(false);
                                    }}
                                    onMouseEnter={() => {
                                        setShowCategorySheet(true);
                                        setSelectedCategory(item.categoryId)
                                    }}
                                    key={item.categoryId}
                                    className="mainCategory flex h-[70px] items-center px-4 hover:border-b-2 hover:border-primary hover:text-primary"
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-1 lg:gap-6 items-center">
                        {/* 1.search icon     */}
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        {/* 2. login button */}
                        {
                            true ? <Button onClick={()=>navigate('/account/orders')} className='flex items-center gap-2'>
                                <Avatar
                                    sx={{ width: 29, height: 29 }} src='https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg' />
                                <h1 className='font-semibold hidden lg:block'>Zosh</h1>
                            </Button>
                                : <Button variant='contained'>Login</Button>
                        }

                        {/* 3. favorite icon */}
                        <IconButton>
                            <FavoriteBorderIcon sx={{ fontSize: 29 }} />
                        </IconButton>
                        {/* 4. cart icon */}
                        <IconButton onClick={()=>navigate('/cart')}>
                            <AddShoppingCartIcon  className='text-gray-700' sx={{ fontSize: 29 }} />
                        </IconButton>
                        {/* 5. become seller button */}
                        {
                            isLarge && <Button startIcon={<Storefront />} variant='outlined'>Become Seller</Button>
                        }


                    </div>

                </div>

                {
                    showCategorySheet && <div
                    onMouseLeave={() => {
                        setShowCategorySheet(false);
                    }}
                    onMouseEnter={() => {
                        setShowCategorySheet(true);

                    }}

                    className='categorySheet absolute top-[4.41rem] left-20 right-20 border'>
                    <CategorySheet selectedCategory={selectedCategory} />
                </div>
                }
                

            </Box>

        </>
    )
}

export default Navbar