import { Label } from '@mui/icons-material'
import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import BecomeSellerFormStepOne from './BecomeSellerFormStepOne'
import { useFormik } from 'formik'
import BecomeSellerFormStepTwo from './BecomeSellerFormStepTwo'
import BecomeSellerFormStepThree from './BecomeSellerFormStepThree'
import BecomeSellerFormStepFour from './BecomeSellerFormStepFour'

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details"
]

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleStep = (value: number) => () => {
    //setActiveStep(activeStep + value)
    (activeStep<steps.length-1 || (activeStep>0 && value==-1))&&setActiveStep(activeStep + value)
    activeStep==steps.length-1 && handleCreateAccount()
  }
  const handleCreateAccount=()=>{
    console.log("create account")
  }
  const formik=useFormik({
    initialValues:{
      mobile:"",
      otp:"",
      gstin:"",
      pickupAddress:{
        name:"",
        mobile:"",
        pincode:"",
        address:"",
        locality:"",
        city:"",
        state:""
      },
      bankDetails:{
        accountNumber:"",
        ifscCode:"",
        accountHolderName:""
      },
      sellerName:"",
      email:"",
      bussinessDetails:{
        bussinessName:"",
        bussinessEmail:"",
        bussinessMobile:"",
        logo:"",
        banner:"",
        bussinessAddress:""
      },
      password:""
    },
    //validationSchema:FormSchema
    onSubmit:(values:any)=>{
      console.log(values,"formik submitted")
      console.log("active step",activeStep)
    }
  })
  return (
    <>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {
            steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))
          }
        </Stepper>
        <section className='mt-20 space-y-10'>
          <div>
            {activeStep==0 ? <BecomeSellerFormStepOne formik={formik}/>:
            activeStep==1? <BecomeSellerFormStepTwo formik={formik}/>:
            activeStep==2? <BecomeSellerFormStepThree formik={formik}/>:
            activeStep==3? <BecomeSellerFormStepFour formik={formik}/>:""
            }
          </div>
          

          <div className='flex items-center justify-between'>
          <Button onClick={(handleStep(-1))} variant='contained' disabled={activeStep == 0}>
            Back
          </Button>
          <Button onClick={(handleStep(1))} variant='contained' >
            {activeStep === (steps.length - 1) ? "Create Account" : "Continue"}

          </Button>

        </div>
        </section>

        
      </div>
    </>
  )
}

export default SellerAccountForm