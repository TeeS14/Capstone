import React, { useState } from 'react';

const products =   {
  id: 1,
  productName: 'Iphone 15',
  price: 19.99,
  image: "https://www.box.co.uk/image?id=5285200&quality=90&maxwidth=760&maxheight=520",
},
// {
//   id: 2,
//   productName: 'Samsung Fold 5',
//   price: 29.99,
//   image: 'https://m.media-amazon.com/images/I/61LyIe34PVL._AC_SX522_.jpg',
// },
// {
//   id: 3,
//   productName: 'Nissan 240sx',
//   price: 13999.99,
//   image: 'https://cdn11.bigcommerce.com/s-4rccvh1/images/stencil/1280x1280/products/976/1883/GT-kouki-FF-30mm-2-a__78267.1575567907.jpg?c=2',
// },
// {
//   id: 4,
//   productName: 'Tickects to Japan',
//   price: 2199.90,
//   image: 'https://www.tokyometro.jp/lang_en/ticket/value/ticket_otoku07.png',
// },
// {
//   id: 5,
//   productName: 'Gaming PC',
//   price:  4956.99,
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWKDVMNtQdqgghS4hT3GJEsfJ0roziwGiSQ&usqp=CAU',
// },
// {
//   id: 6,
//   productName: 'A Wish',
//   price: 9999999999.99,
//   image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/172A4/production/_129248849_gettyimages-488635593.jpg.webp', 
// },
// {
//   id: 7,
//   productName: 'A Job at Amazon',
//   price: 0.00,
//   image: 'https://i.guim.co.uk/img/media/b97d090f8c41f1fbefd561793f1b9c6fc8d4108f/0_182_5472_3283/master/5472.jpg?width=620&dpr=2&s=none', 
// },
// {
//   id: 8,
//   productName: 'A Job as Software Engineer',
//   price: 19999.99,
//   image: 'https://drexel.edu/~/media/Images/cci/Stories/Remote%20Software%20Engineering-Page.ashx?h=1000&w=1500&hash=6BB2151F2495C52A21F368DADF9D7D9604BC1936',
// },
// ];

function ProductList({ addToCart }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

function ProductItem({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <li>
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.productName} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.productName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
