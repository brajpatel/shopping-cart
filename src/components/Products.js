import React, { useState } from "react";
import Product from "./Product";
import blackHoodie from "../assets/black-hoodie.png";
import greyHoodie from "../assets/grey-hoodie.png";
import blueHoodie from "../assets/blue-hoodie.png";
import yellowHoodie from "../assets/yellow-hoodie.png";
import redHoodie from "../assets/red-hoodie.png";
import pinkHoodie from "../assets/pink-hoodie.png";

const allProducts = [
    {
        image: blackHoodie,
        name: 'Black Hoodie',
        price: '£22.99'
    }
]

function Products() {
    const [products, setProducts] = useState([]);

    return (
        <Product image={blackHoodie}/>
    )
}

export default Products;