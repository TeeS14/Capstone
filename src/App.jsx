import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Loginform";
import { NavBar } from "./components/NavBar";
import './NavBar.css';
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
