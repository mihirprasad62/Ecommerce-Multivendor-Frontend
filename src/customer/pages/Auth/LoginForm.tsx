import { Button, CircularProgress, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { useFormik } from 'formik'
import { sendLoginSignupOtp, signin } from '../../../State/auth/authSlice'

const LoginForm = () => {
  const { auth } = useAppSelector(store => store)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
    onSubmit: (values) => {
      dispatch(signin(values))

    }
  })
  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }))
  }
  return (
    <>
      <div>
        <h1 className='text-center font-bold text-xl text-primary pb-8'>Login</h1>

        <div className='space-y-5'>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}

          />
          {
            auth.otpSent &&
            <div className='space-y-2'>
              <p className='font-medium text-sm opacity-20'>Enter otp sent to your mobile</p>
              <TextField
                fullWidth
                name="otp"
                label="otp"
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}

              />
            </div>

          }
          {auth.otpSent ? <Button onClick={() => formik.handleSubmit()} fullWidth variant='contained' sx={{ py: "11px" }}>
            Login
          </Button> : <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{ py: "11px" }}>
            {auth.loading ? <CircularProgress aria-label="Loading…" /> : "Send OTP"}

          </Button>}

        </div>
      </div>
    </>
  )
}

export default LoginForm