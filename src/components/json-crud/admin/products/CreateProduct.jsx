import React from "react";
import { SiD } from "react-icons/si";
import { Link } from "react-router-dom";

const CreateProduct = () => {

     const handleSubmitForm = (e) => {
         e.preventDefault();
          console.log(e.target)
         const formData = new FormData(e.target);
         const product = Object.fromEntries(formData.entries());
          console.log(product)     
     }
  return ( 
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-[800px] p-5 shadow-2xl rounded-lg bg-[#f3f3f3]">
        <h2 className="text-5xl text-center font-bold ">Add New Product</h2>
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Name</label>
                <div className="flex flex-col w-full ">
                <input
                    type="text"
                    name="name"
                    className=" border-1 border-gray-300 h-13 focus:outline-0 focus:border-blue-500 px-4 py-3"
                />
                <span className="text-danger"></span>
                </div>
            </div>
            <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Brand</label>
                <div className="flex flex-col w-full ">
                <input
                    type="text"
                    name="brand"
                    className=" border-1 border-gray-300 h-13 focus:outline-0 focus:border-blue-500 px-4 py-3"
                />
                <span className="text-danger"></span>
                </div>
            </div>
              <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Category</label>
                <div className="flex flex-col w-full">
                <select className=" w-full border-1 border-gray-300 h-13 text-lg focus:outline-0 focus:border-blue-500 px-4 py-3" name="category">
                <option value ="Other">Other</option>
                <option value ="Phones">Phones</option>
                <option value ="Computers">Computers</option>
                <option value ="Accessories">Accessories</option>
                <option value ="Printers">Printers</option>
                <option value ="Cameras">Cameras</option>

                </select>
                <span className="text-danger"></span>
                </div>
            </div>
            <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Price</label>
                <div className="flex flex-col w-full ">
                <input
                    type="number"
                    name="price"
                    className=" border-1 border-gray-300 h-13 focus:outline-0 focus:border-blue-500 px-4 py-3"
                    min="1"
                    step="0.01"
                />
                <span className="text-danger"></span>
                </div>
            </div>
            <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Image</label>
                <div className="flex flex-col w-full ">
                <input
                    type="file"
                    name="image"
                    className=" border-1 border-gray-300 h-13 focus:outline-0 focus:border-blue-500 px-4 py-3"
                />
                <span className="text-danger"></span>
                </div>
            </div>
            <div className="mb-3 py-5 flex items-center gap-5 justify-between">
                <label className="text-2xl text-gray-700 min-w-[70px]">Description</label>
                <div className="flex flex-col w-full ">
                <textarea
                    rows="4"
                    name="description"
                    className=" border-1 border-gray-300  focus:outline-0 focus:border-blue-500 px-4 py-3"
                    
                />
                <span className="text-danger"></span>
                </div>
            </div>
             <div className="mb-3 py-5 flex items-center justify-center gap-5">
                <button type ="submit" className="bg-green-500 text-white text-2xl px-5 py-3 rounded-md">Create</button>
                <Link to="/admin/products" className="bg-red-700 text-white text-2xl px-5 py-3 rounded-md">Cancel</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
