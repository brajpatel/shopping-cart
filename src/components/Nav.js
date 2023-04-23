import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h1>Shop</h1>
            <ul>
                <Link to='/'/>
                <Link to='/shop'/>
            </ul>
        </nav>
    )
}

export default Nav;