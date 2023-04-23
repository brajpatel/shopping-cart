import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h1>Welcome to <span>Shop</span></h1>
            <ul>
                <Link className="page-link" to='/'>Home</Link>
                <Link className="page-link" to='/shop'>Shop</Link>
                <Link className="page-link" to='/contact'>Contact</Link>
                <Link className="page-link" to='/cart'>Cart</Link>
            </ul>
        </nav>
    )
}

export default Nav;