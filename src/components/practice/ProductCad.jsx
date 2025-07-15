import React from 'react'

const ProductCad = ({product}) => {
   const {title , images } = product
  return (
    <div className='product'>
       <div className='img-con'>
        <img src={images[0]} alt={title} className='w-12 h-12' />
       </div>
       <h2 className='py-4 text-2xl font-bold'>{title}</h2>
    </div>
  )
}

export default ProductCad