import React, { useEffect, useState } from 'react'
import "./productCard.css"
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import type { Product } from '../../../types/ProductTypes';

/*
const images=[
    "https://assets.myntassets.com/assets/images/2025/APRIL/5/UZcUaWse_fc40bb8b542f4541b7be5c487a6108e9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyQJgtGuB8KRf4rMGnGyE5KQOFjn_0nzwlN_fU3hae3lezsBDQjTQcu3P&s=10",
    "https://img.tatacliq.com/images/i21//1348Wx2000H/MP000000025004635_1348Wx2000H_202501101541595.jpeg",
    "https://clothsvilla.com/cdn/shop/files/NRJ_5071_cd92b257-b308-45f9-b490-6560a756f669.jpg?v=1748349535&width=1600",
    "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-linen-saree-in-red-v1-scca178.jpg"


]
    */

const ProductCard = ({item}:{item:Product}) => {
    const[currentImage,setCurrentImage]=useState(0);
    const[isHovered,setIsHovered]=useState(false);

    useEffect(()=>{
        let interval:any 
        if(isHovered){
            interval=setInterval(()=>{
                setCurrentImage((prevImage)=>(prevImage+1)% item.images.length)
            },1000)
        }else if(interval){
            clearInterval(interval);
            interval=null;
        }
        return ()=>clearInterval(interval)
    },[isHovered])
  return (
    <>
    <div className='group px-4 relative'>
        <div className='card'
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
             {
                item.images.map((item,index)=><img
                className='card-media object-top'
                src={item} alt=""
                style={{transform:`translateX(${(index-currentImage)*100}%)`}}
                />)
             }
             { isHovered &&
                <div className='indicator flex flex-col items-center space-y-2'>
                    <div className='flex gap-3'>
                        <Button variant='contained' color='secondary'>
                            <Favorite sx={{color:teal[500]}}/>
                        </Button>
                         <Button variant='contained' color='secondary'>
                            <ModeComment sx={{color:teal[500]}}/>
                        </Button>
                    </div>
                </div>
             }
        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
             <div className='name'>
                <h1>{item.seller?.businessDetails?.businessName}</h1>
                <p>{item.title}</p>
             </div>
             <div className='price flex items-center gap-3'>
                <span className='font-sans text-gray-800'>
                    {item.sellingPrice}
                </span>
                <span className='thin-line-through'>
                    {item.mrpPrice}
                </span>
                <span className='text-primary font-semibold'>
                    {item.discountPercent} %
                </span>
             </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard