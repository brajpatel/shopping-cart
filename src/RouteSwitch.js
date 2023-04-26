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

  const addToCart = () => {
    setCartSize(cartSize + 1);
  }
  
  return (
    <BrowserRouter>
      <Nav cartSize={cartSize}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
}

export default RouteSwitch;
