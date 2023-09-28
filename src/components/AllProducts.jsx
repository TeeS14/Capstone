import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Iphone 15', price: 19.99 },
  { id: 2, name: 'Samsung Fold 5', price: 29.99 },
  { id: 3, name: 'Nissan 240sx', price: 13999.99 },
  { id: 4, name: 'Tickects to Japan', price: 2199.90 },
  { id: 5, name: 'Gaming PC', price: 4956.99 },
  { id: 6, name: 'A Wish', price: 9999999999.99 },
  { id: 7, name: 'A Job at Amazon', price: 0.00 },
  { id: 8, name: 'A Job as Software Engineer', price: 19999.99 },
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </li>
  );
}

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
