import React, { useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Divider, IconButton } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Product = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

    const [sort, setSort] = useState();
    const handleSortChange = (event: any) => {
        setSort(event.target.value)
    }
    return (
        <>

            <div className='-z-10 mt-10'>
                <div>
                    <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>women sarees</h1>
                </div>

                <div className='lg:flex'>
                    <section className='filter_section'>

                        <FilterSection />

                    </section>
                    <div className='w-full lg:w-[80%] space-y-5'>
                        <div className='flex justify-between items-center px-9 h-[40px]'>
                            <div className='relative w-[50%]'>

                                {
                                    !isLarge && (
                                        <IconButton>
                                            <FilterAlt />
                                        </IconButton>
                                    )

                                }
                                {
                                    !isLarge && (
                                        <Box>
                                            <FilterSection />
                                        </Box>
                                    )
                                }
                            </div>

                            <FormControl size='small' sx={{width:"200px"}}>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sort}
                                    label="Age"
                                    onChange={handleSortChange}
                                >
                                    <MenuItem value={"price_low"}>Price : low to high</MenuItem>
                                    <MenuItem value={"price_high"}>Price : high to low</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                        <Divider/>

                        <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>

                            {[1,2,3,4,5,6,7,8].map((item)=><ProductCard />)}

                            
                        </section>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Product