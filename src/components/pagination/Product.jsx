import React from 'react'

const Product = ({ image, title }) => {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-img" />
      <h5 className="product-title"> {title}</h5>
    </div>
  );
};

export default Product;



