import React from "react";
import EmptyCart from "./EmptyCart";

function Cart(props) {
    const { cartItems } = props;

    return (
        <div className="cart-page">
            <h2>Items in cart</h2>
            <div className="cart">
                {cartItems.length ?
                cartItems.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                }) :
                <EmptyCart/>
                }
            </div>
        </div>
    )
}

export default Cart;