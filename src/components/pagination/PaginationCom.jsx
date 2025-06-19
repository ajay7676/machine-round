import React, { useEffect, useState } from "react";
import "./pagination.css";
import Product from "./Product";
import Pagination from './Pagination'

const PaginationCom = () => {
  const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    // try {
    //    const data = await fetch('https://dummyjson.com/products');
    //     const response = await data.json();
    //     console.log(response)
    //     setProducts(response.products)
    // } catch (error) {
    //    console.log("Ddf" , error)

    // }
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const response = await data.json();
    setProducts(response.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const totalproducts = products.length;
  const noofpages = Math.ceil(totalproducts / PAGE_SIZE);
  const start = currentPage + PAGE_SIZE;
  const end = start + PAGE_SIZE
 const handleCurrntPage = (k) => {
  setCurrentPage(k)

 }
 const gotoNextPage = ()=> {
  setCurrentPage((prev) => prev+1)

 }
 const gotoPreviousPage = () => {
  setCurrentPage((prev) => prev-1)

 }
  return (
    <div className="product-main-con">
      <div className="product-con">
        {products && !products.length ? (
          <h1>Product is Loading ...</h1>
        ) : (
          products
            .slice(start, end)
            .map((p) => (
              <Product key={p.id} image={p.thumbnail} title={p.title}
              
              />
            ))
        )}
      </div>
      <div className="pagination-con">
        <Pagination  currentPage={currentPage} noofpages={noofpages}  gotoPreviousPage={gotoPreviousPage} gotoNextPage={gotoNextPage} handleCurrntPage={handleCurrntPage}/>
      </div>
    </div>
  );
};

export default PaginationCom;
