import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [productsList, setproductsList] = useState([])

    const fetchProducts =  async () => {
        try{
            const  response = await fetch(`http://localhost:3000/products?_sort=id&_order=desc`);
             console.log(response)
              const data = await response.json();
               console.log(data)
               setproductsList (data)
        } catch(error){
             console.log(error)
        }
    }
    useEffect(() => {
       fetchProducts()
    }, [])
    
  return (
    <div className="w-full my-4">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="flex py-10 justify-between items-center">
          <Link to="/admin/products/create" className="bg-blue-700 text-white p-5  rounded-md ">Create Product</Link>
          <button type="button"
          onClick={fetchProducts}
          className="bg-[#eaeae] text-[#455]">
            Refresh
          </button>
        </div>
        <div className="table-con w-full bg-white px-5 py-3">
          <table className="table border-1 border-gray-300 w-full text-2xl">
            <thead>
              <tr>
                <th className="px-4 py-3  font-bold">ID</th>
                <th className="px-4 py-3  font-bold">Name</th>
                <th className="px-4 py-3  font-bold">Brand</th>
                <th className="px-4 py-3  font-bold">Category</th>
                <th className="px-4 py-3  font-bold">Price</th>
                <th className="px-4 py-3  font-bold">Image</th>
                <th className="px-4 py-3  font-bold">Created At</th>
                <th className="px-4 py-3  font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                      productsList && (

                        productsList.map((product) => (
                            <tr key={product.id} className="border-b-1 border-gray-300">
                                <td className="text-center px-3 py-3">{product.id}</td>
                                 <td className="text-center px-3 py-3">{product.title.slice(0, 10)}</td>
                                 <td className="text-center px-3 py-3">{product.brand}</td>
                                 <td className="text-center px-3 py-3">{product.category}</td>
                                 <td className="text-center px-3 py-3">{product.price}</td>
                                 <td className="px-3 py-3">
                                    <img src={product.thumbnail} alt={product.title.slice(0,10)} className="w-12 h-12" />
                                 </td>
                                 <td className="px-3 py-3">{moment(product.meta.createdAt).format("MMMM Do YYYY")}</td>
                                 <td  className="px-3 py-3">
                                    <div className=" flex items-center justify-between">
                                        <Link to="#" className="bg-green-400 px-4 py-3 rounded-md text-gray-700">View</Link>
                                        <Link to="#" className="bg-blue-400 px-4 py-3 rounded-md text-white">Edit</Link>
                                        <Link to="#" className="bg-red-500 px-4 py-3 rounded-md text-white">Delete</Link>
                                    </div>
                                 </td>
                            </tr>
                        ))
                      )
                    
                   }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
