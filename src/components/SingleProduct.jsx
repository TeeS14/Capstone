import React from 'react';

function SingleProductDisplay({ product }) {
  return (
    <div className="SingleProduct">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default SingleProductDisplay;
