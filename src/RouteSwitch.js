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

  const addToCart = (productObj) => {
    setCartSize(cartSize + 1);

    let product = productObj[0];

    if(cartItems.filter((item) => item.name === product.name).length) {
      let updatedCartItems = [...cartItems];
      let index = updatedCartItems.findIndex((item) => item.name === product.name);
      updatedCartItems[index].quantity = updatedCartItems[index].quantity + 1;

      setCartItems(updatedCartItems);
    }
    else {
      setCartItems(cartItems.concat(product));
    }

    
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
