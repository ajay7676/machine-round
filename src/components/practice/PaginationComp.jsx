import React, { useEffect, useState } from 'react'
import  './style.css'
import ProductCad from './ProductCad'
import Pagination from './Pagination';

const PaginationComp = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setcurrentPage] = useState(0)
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=200`)
    const data = await response.json();
    console.log(data?.products)
    setProducts(data?.products)
  }
   useEffect (() => {
      fetchData();
   } , [])

const perPage = 10;
const totalproducts = products.length;
const nopages = Math.ceil(totalproducts / perPage);
 const start = currentPage + perPage;
 const end  = start + perPage;
 const handleCurrntPage = (e) => { 
     setcurrentPage(e)
 }
 const gotoPreviousPage = () => { 
    setcurrentPage(prevPage => prevPage - 1)
 }
 const gotoNextPage = () => { 
    setcurrentPage(prevPage => prevPage + 1)
 }
  return (
    <div>
        <h1 className='text-white text-center py-5 text-4xl'>
            Pagination 
        </h1>
        <div className='product-con'>
           {
            products && products.length > 0 ? <>
              {
                 products.slice(start , end).map((product) => (

                    <ProductCad key={product.id}  product={product} />
                 ))
              }
            
            </>
            : <h1 className='text-white'>No Product Found</h1>

           }
        </div>
        <div className="pagination-con">
            <Pagination nopages ={nopages} currentPage={currentPage}  gotoPreviousPage={gotoPreviousPage} gotoNextPage ={gotoNextPage} handleCurrntPage ={handleCurrntPage}/>
        </div>
    </div>
  )
}

export default PaginationComp