import React, { useState } from 'react'
import { Button, Divider } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { teal } from '@mui/material/colors';
import { colors } from '../../../data/filter/colors';
import { useSearchParams } from "react-router-dom";
import { price } from '../../../data/filter/price';
import { discount } from '../../../data/filter/discount';

const FilterSection = () => {

    const [expandColor, setExpandColor] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleColorToggle = () => {
        setExpandColor(!expandColor)
    }
     const updateFilterParams = (e: any) => {
        const { value, name } = e.target;

        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set(name, value);
        } else {
            params.delete(name);
        }

        setSearchParams(params);
    };

    const clearAllFilters = () => {
        setSearchParams({});
    };

    return (
        <>
            <div className='-z-50 space-y-5 bg-white'>
                <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
                    <p className="tex-lg font-semibold">
                        Filters
                    </p>
                    <Button
                    onClick={clearAllFilters}
                     size='small' className='text-teal-600 cursor-pointer font-semibold'>
                        clear all
                    </Button>
                </div>
                <Divider />

                <div className='px-9 space-y-6'>
                    <section>
                        <FormControl>
                            <FormLabel
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: teal[500],
                                    pb: "14px"
                                }}
                                className='text-2xl font-semibold' id='color'>Color</FormLabel>
                            <RadioGroup
                                 onChange={updateFilterParams}
                                defaultValue=""
                                name="color"
                            >
                                {colors.slice(0, expandColor ? colors.length : 5).map((item) => <FormControlLabel value={item.name} control={<Radio />}
                                    label={
                                        <div className='flex items-center gap-3'>
                                            <p>{item.name}</p>
                                            <p style={{ backgroundColor: item.hex }} className={`h-5 w-5 rounded-full ${item.name === "white" ? "border" : ""}`}>

                                            </p>
                                        </div>
                                    } />)}


                            </RadioGroup>
                        </FormControl>
                        <div>
                            <button
                                onClick={handleColorToggle}
                                className='text-primary cursor-pointer hover:text-teal-900 flex items-center'>
                                {
                                    expandColor ? "hide" : `+${colors.length - 5} more`
                                }
                            </button>
                        </div>
                    </section>
                    <Divider/>

                     <section>
                        <FormControl>
                            <FormLabel
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: teal[500],
                                    pb: "14px"
                                }}
                                className='text-2xl font-semibold' id='color'>Price</FormLabel>
                            <RadioGroup
                                 onChange={updateFilterParams}
                                defaultValue=""
                                name="price"
                            >
                                {price.map((item) => <FormControlLabel key={item.name} value={item.value} control={<Radio size='small' />}
                                    label={
                                       item.name
                                    } />)}


                            </RadioGroup>
                        </FormControl>
                        {/* <div>
                            <button
                                onClick={handleColorToggle}
                                className='text-primary cursor-pointer hover:text-teal-900 flex items-center'>
                                {
                                    expandColor ? "hide" : `+${colors.length - 5} more`
                                }
                            </button>
                        </div> */}
                    </section>
                    <Divider/>
                    <section>
                        <FormControl>
                            <FormLabel
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: teal[500],
                                    pb: "14px"
                                }}
                                className='text-2xl font-semibold' id='color'>Discount</FormLabel>
                            <RadioGroup
                                onChange={updateFilterParams}
                                defaultValue=""
                                name="discount"
                            >
                                {discount.map((item) => <FormControlLabel key={item.name} value={item.value} control={<Radio size='small' />}
                                    label={
                                       item.name
                                    } />)}


                            </RadioGroup>
                        </FormControl>
                        {/* <div>
                            <button
                                onClick={handleColorToggle}
                                className='text-primary cursor-pointer hover:text-teal-900 flex items-center'>
                                {
                                    expandColor ? "hide" : `+${colors.length - 5} more`
                                }
                            </button>
                        </div> */}
                    </section>

                </div>
            </div>
        </>

    )
}

export default FilterSection