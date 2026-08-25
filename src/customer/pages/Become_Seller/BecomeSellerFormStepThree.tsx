import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStepThree = ({formik}:any) => {
   return (
        <div className="space-y-5">
            <TextField
                fullWidth
                name="bankDetails.accountNumber"
                label="Account Number"
                value={formik.values.bankDetails.accountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
                helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
            />
            <TextField
                fullWidth
                name="bankDetails.ifscCode"
                label="IFSC Code"
                value={formik.values.bankDetails.ifscCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
                helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
            />
            </div>
   )
}

export default BecomeSellerFormStepThree