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

    let updatedCartItems = [...cartItems];

    if(updatedCartItems.filter((item) => item.name === product.name).length) {
      let index = updatedCartItems.findIndex((item) => item.name === product.name);
      updatedCartItems[index].quantity = updatedCartItems[index].quantity + 1;

      setCartItems(updatedCartItems);
    }
    else {
      product.quantity = 1;
      setCartItems(cartItems.concat(product));
    }
  }

  const increaseQuantity = (product) => {
    setCartSize(cartSize + 1);

    let updatedCartItems = [...cartItems];
    let index = updatedCartItems.findIndex((item) => item.id === product.id);
    updatedCartItems[index].quantity = updatedCartItems[index].quantity + 1;
  }

  const decreaseQuantity = (product) => {
    setCartSize(cartSize - 1);

    let updatedCartItems = [...cartItems];
    let index = updatedCartItems.findIndex((item) => item.id === product.id);
    
    if(updatedCartItems[index].quantity - 1 === 0) {
      removeFromCart(product);
    }
    else {
      updatedCartItems[index].quantity = updatedCartItems[index].quantity - 1;
    }
  }

  const removeFromCart = (product) => {
    setCartSize(cartSize - product.quantity);

    let updatedCartItems = [...cartItems];
    let index = updatedCartItems.findIndex((item) => item.id === product.id);
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }
  
  return (
    <BrowserRouter>
      <Nav cartSize={cartSize}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
        <Route
          path='/cart'
          element={
          <Cart
          cartSize={cartSize}
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          />}
        />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
}

export default RouteSwitch;
