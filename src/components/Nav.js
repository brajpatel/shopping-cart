import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    const { cartSize } = props;

    return (
        <nav>
            <h1>Welcome to <span>Hoodies</span></h1>
            <ul>
                <Link className="page-link main-link" to='/'>Home</Link>
                <Link className="page-link main-link" to='/shop'>Shop</Link>
                <Link className="page-link cart-link" to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className="cart-size">{cartSize}</span></Link>
            </ul>
        </nav>
    )
}

export default Nav;