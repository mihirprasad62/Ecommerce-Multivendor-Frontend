import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

const ProductDetails = () => {
  const [quantity,setQuantity]=useState(1);
  return (
    <>
    <div className='px-5 lg:px-20 pt-10'>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <section className='flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
              { [1,1,1,1].map((item)=><img className='lg:w-full w-[50px] cursor-pointer rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3K5mFn6vKygkCVbFzkbsf0Dg-3N03Ljjv1LPG0LNAi7mfG7Z8hBNe5w&s=10'/>)}
            </div>

            <div className='w-full lg:w-[85%]'>
              <img className='w-full rounded-md' src="https://suvidhafashion.com/cdn/shop/files/44.png?v=1757924170&width=500" alt="" />
            </div>
          </section>

          <section>
            <h1 className='font-bold text-lg text-primary'>Brand Name</h1>
            <p className='text-gray-500 font-semibold'>Men black shirt</p>
            <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
              <div className='flex gap-1 items-center'>
                <span>4</span>
                <StarIcon sx={{color:teal[500],fontSize:"17px"}}/>
              </div>
              <Divider orientation='vertical' flexItem/>
              <span>
                234 Ratings
              </span>
            </div>
           <div>
             <div className='price flex items-center gap-3 mt-5 text-2xl'>
                <span className='font-sans text-gray-800'>
                    ₹ 400
                </span>
                <span className='line-through'>
                    999
                </span>
                <span className='text-primary font-semibold'>
                    60%
                </span>
             </div>
             <p className='text-sm'>Inclusive of all taxes free shipping above 1500.</p>
           </div>

          <div className='mt-7 space-y-3'>
            <div className='flex items-center gap-4'>
            <Shield sx={{color:teal[500]}}/>
            <p>Authentic & Quality Assured</p>
            </div>
             <div className='flex items-center gap-4'>
            <WorkspacePremium sx={{color:teal[500]}}/>
            <p>100% Money Back Gurrenty</p>
            </div>
             <div className='flex items-center gap-4'>
            <LocalShipping sx={{color:teal[500]}}/>
            <p>Free Shipping & Returns</p>
            </div>
             <div className='flex items-center gap-4'>
            <Wallet sx={{color:teal[500]}}/>
            <p>Pay on delivery might be available</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className='flex items-center gap-2 w-[140px] justify-between'>
                <Button disabled={quantity==1} onClick={()=>setQuantity(prev=>prev-1)}>
                  <Remove/>
                </Button>
                {quantity}
                 <Button onClick={()=>setQuantity(prev=>prev+1)}>
                  <AddIcon/>
                </Button>
            </div>
          </div>
          <div className='mt-12 flex items-center gap-5'>
             <Button
             fullWidth
             variant='contained'
             startIcon={<AddShoppingCart/>}
             sx={{py:"1rem"}}
             >
                Add To Cart

             </Button>
             <Button
             fullWidth
             variant='outlined'
             startIcon={<FavoriteBorder/>}
             sx={{py:"1rem"}}
             >
                Add To WishList

             </Button>
          </div>
        <div className='mt-5'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident delectus accusamus itaque aspernatur sit error voluptatem, quae corporis tempore dolore, suscipit perferendis praesentium quasi autem quis velit nemo non veniam!
          </p>
        </div>
        <div className='mt-7 space-y-5'>
          <ReviewCard/>
          <Divider/>
        </div>
          </section>
       </div>


    <div className='mt-20'>

      <h1 className='text-lg font-bold'>
        Similar Product
      </h1>
      <div className='pt-5'>
       <SimilarProduct/>
      </div>
     
    </div>

       


    </div>
    </>
  )
}

export default ProductDetails