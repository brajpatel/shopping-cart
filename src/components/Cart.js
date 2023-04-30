import React from "react";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";

function Cart(props) {
    const { cartSize, cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = props;

    return (
        <div className="cart-page">
            <h2>Your Cart <i className="fa-solid fa-cart-shopping"></i></h2>
                {cartItems.length ?
                <CartItems
                cartSize={cartSize}
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                /> :
                <EmptyCart/>
                }
        </div>
    )
}

export default Cart;