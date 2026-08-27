import { useFormik } from 'formik'
import React from 'react'
import { Dayjs } from 'dayjs'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, Grid, TextField } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
interface couponFormValues {
  code: string,
  discountPercentage: number,
  validityStartDate: Dayjs | null,
  validityEndDate: Dayjs | null,
  minimumOrderValue: number
}
const AddNewCouponForm = () => {
  const formik = useFormik<couponFormValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0
    },
    onSubmit: (values) => {
      console.log("form submited", values)
      const formattedValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString()
      }
      console.log("form submited", values, formattedValues)
    }
  })
  return (
    <>
      <div>
        <h1 className='text-2xl font-bold text-primary pb-5 text-center'>CREATE NEW COUPON</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth name='code' label="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  error={formik.touched.code && Boolean(formik.errors.code)}
                  helperText={
                    formik.touched.code && formik.errors.code
                      ? String(formik.errors.code)
                      : ""}

                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth name='discountPercentage' label="DiscountPercentage"
                  value={formik.values.discountPercentage}
                  onChange={formik.handleChange}
                  error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                  helperText={
                    formik.touched.discountPercentage && formik.errors.discountPercentage
                      ? String(formik.errors.discountPercentage)
                      : ""}

                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <DatePicker
                sx={{width:"100%"}}
                value={formik.values.validityStartDate}
                name='validityStartDate'
                onChange={formik.handleChange}
                 label="Valididy Start Date" />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <DatePicker
                sx={{width:"100%"}}
                value={formik.values.validityEndDate}
                name='validityEndDate'
                onChange={formik.handleChange}
                 label="Valididy End Date" />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth name='minimumOrderValue' label="MinimumOrderValue"
                  value={formik.values.minimumOrderValue}
                  onChange={formik.handleChange}
                  error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                  helperText={
                    formik.touched.minimumOrderValue && formik.errors.minimumOrderValue
                      ? String(formik.errors.minimumOrderValue)
                      : ""}

                />
              </Grid>

              <Grid size={{xs:12}}>
                    <Button variant='contained' fullWidth sx={{py:'.8rem'}}>Create Coupon</Button>
              </Grid>


            </Grid>
          </Box>
        </LocalizationProvider>
      </div>
    </>
  )
}

export default AddNewCouponForm