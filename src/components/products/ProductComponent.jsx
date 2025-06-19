import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../slice/product/productSlice';
import ProductCard from './ProductCard';

const ProductComponent = () => {
     const dispatch = useDispatch();
     const {products , loading , error} = useSelector(store => store?.products);

     useEffect(() => {

        dispatch(fetchProducts())
         
     
     }, [dispatch])
     
  return (
    <div>
         <div className='w-full flex align-center justify-center h-full flex-wrap gap-5 mt-10'>
          {
             loading && <h1>Loading ....</h1>
          }
          {
            error && <h1>{error}</h1>
          }
            {
                products && (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))

                )
            }
         </div>
         {

         }
        
    </div>
  )
}

export default ProductComponent;