import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <p>Looks like your cart is empty!</p>
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to='/shop'><button>Browse Products</button></Link>
        </div>
    )
}

export default EmptyCart;