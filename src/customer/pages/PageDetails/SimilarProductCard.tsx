import React from 'react'

const SimilarProductCard = () => {
  return (
    <>
    <div className='group px-4 relative'>
        <div className='card'
        
        >
             
              <img
                className='card-media object-top'
                src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/3/d3662afSK5419_4.jpg?rnd=20200526195200&tr=w-512"} alt=""
              
                />
             
             
        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
             <div className='name'>
                <h1>Niky</h1>
                <p>Blue Shirt</p>
             </div>
             <div className='price flex items-center gap-3'>
                <span className='font-sans text-gray-800'>
                    ₹ 400
                </span>
                <span className='thin-line-through'>
                    999
                </span>
                <span className='text-primary font-semibold'>
                    60%
                </span>
             </div>
        </div>
    </div>
    </>
  )
}

export default SimilarProductCard