import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';

function RouteSwitch() {
  const [cartSize, setCartSize] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartSize(cartSize + 1);
    setCartItems(cartItems.concat(product[0]))
  }
  
  return (
    <BrowserRouter>
      <Nav cartSize={cartSize}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
}

export default RouteSwitch;
