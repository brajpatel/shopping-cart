import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <h2>Your cart is empty!<i class="fa-solid fa-face-surprise"></i></h2>
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to='/shop'>Browse Products</Link>
        </div>
    )
}

export default EmptyCart;