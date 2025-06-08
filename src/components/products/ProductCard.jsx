import React from 'react'

const ProductCard = ({product}) => {
    const {title ,category , image} = product
  return (
    <>
        <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white p-3">
            <div className= "w-full max-w-20 m-auto flex items-center justify-center">
            <img className="w-full h-auto " src={image}  alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{category}</div>
                <p className="text-gray-700 text-base">
                   {title}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    </>
  )
}

export default ProductCard