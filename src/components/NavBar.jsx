import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <h1><Link to="/">Fake Website</Link></h1>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

