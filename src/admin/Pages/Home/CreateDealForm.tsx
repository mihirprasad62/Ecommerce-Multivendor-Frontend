import React from 'react'
import { useFormik } from 'formik'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Form } from 'react-router-dom'

const CreateDealForm = () => {
    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ""
        },
        onSubmit: (values: any) => {
            console.log("submit", values)
        }
    })
    return (
        <>
            <Box component={"form"} className='space-y-6' onSubmit={formik.handleSubmit} sx={{ mt: 3,display:'flex',flexDirection:"column",gap:2  }}>
                <Typography variant='h4' className='text-center'>CREATE DEAL</Typography>

                <TextField
                    fullWidth name='discount' label="discount"
                    value={formik.values.discount}
                    onChange={formik.handleChange}
                    error={formik.touched.discount && Boolean(formik.errors.discount)}
                    helperText={
                        formik.touched.discount && formik.errors.discount
                            ? String(formik.errors.discount)
                            : ""}

                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.Category}
                        label="Age"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button fullWidth sx={{py:'.9rem'}} type='submit' variant='contained'>
                    CREATE DEAL
                </Button>
            </Box>
        </>
    )
}

export default CreateDealForm