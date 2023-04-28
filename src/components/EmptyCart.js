import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <p>Uh oh... Looks like your cart is empty!</p>
            <i className="fa-regular fa-face-dizzy"></i>
            <Link to='/shop'><button>Back to the Shop</button></Link>
        </div>
    )
}

export default EmptyCart;