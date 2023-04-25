import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h1>Welcome to <span>Hoodies</span></h1>
            <ul>
                <Link className="page-link" to='/'>Home</Link>
                <Link className="page-link" to='/shop'>Shop</Link>
                <Link className="page-link" to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className="cart-size">0</span></Link>
            </ul>
        </nav>
    )
}

export default Nav;