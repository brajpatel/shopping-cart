import React from "react";
import EmptyCart from "./EmptyCart";

function Cart(props) {
    const { cartItems } = props;

    return (
        <div className="cart-page">
            <h2>Your Cart <i className="fa-solid fa-cart-shopping"></i></h2>
            <div className="cart">
                {cartItems.length ?
                cartItems.map((item) => {
                    return (
                        <div key={item.id}>{item.name}</div>
                    )
                }) :
                <EmptyCart/>
                }
            </div>
        </div>
    )
}

export default Cart;