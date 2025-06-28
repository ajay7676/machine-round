import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartApp = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart-app")) || [];
    setCartList(cartList);
  }, [cart]);

  const addToCart = (product) => {
        const getProductList = JSON.parse(localStorage.getItem("cart-app")) || [] ;
         console.log(getProductList)
         const existingProduct = getProductList.filter((currProduct) => currProduct.id === product.id);
          console.log(existingProduct)
          if(existingProduct.length > 0) {
            alert("Product Added Already in cart");
            return;
          }else{
              setCart([...cart, product]);
               localStorage.setItem("cart-app", JSON.stringify([...cart, product]) || []);

          }

  };

   const deleteProduct = (id) => {
    const deleteElem = cartList.filter((item) => item.id !== id)
     localStorage.setItem("cart-app", JSON.stringify(deleteElem) || []);
     setCart(deleteElem)
  
  
   }
  return (
    <>
      <div className="p-5 bg-gray-100 min-h-screen">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">🛍️ Product Store</h1>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded relative"
          >
            Cart {cartList.length > 0 && `- ${cartList.length}`}
          </button>
        </header>
        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2">
                {product.title.slice(0, 30)}...
              </h2>
              <p className="text-green-700 font-bold mb-2">
                ₹{product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Start Modal  */}
        {openModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white  rounded-lg w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b-1 border-b-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold mb-4">🛒 Cart Items</h2>
                <button
                  onClick={() => setOpenModal(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
              {cartList.length === 0 ? (
                <p className="text-gray-500  px-6 py-4">No items in cart</p>
              ) : (
                <>
                  <ul className="space-y-2  px-6 py-4">
                    {cartList.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between my-5 bg-[#eaeaea] p-5 rounded-md"
                       

                      >
                        <h3>
                          <span className="pr-6">{item.id}</span>
                          {item.title.slice(0, 20)}
                        </h3>
                        <img src={item.image} className="w-10 h-10" />
                        <h5>{item.price.toFixed(2)}</h5>
                        <button
                           onClick={() => deleteProduct(item.id)}
                         className="bg-red-600 text-white py-2 px-3"><FaTrash /></button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between px-6 py-4  border-t-1 border-t-gray-200">
                       <h1 className="text-gray-500 text-4xl">Total Price :: </h1>
                       <h1 className="text-gray-500 text-4xl"> {
                      cartList.reduce((acc, currElem) =>  acc += currElem.price ,0)
                    } </h1>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartApp;
