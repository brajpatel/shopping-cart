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
        price: '£28.99'
    },
    {
        image: greyHoodie,
        name: 'Grey Hoodie',
        price: '£24.99'
    },
    {
        image: blueHoodie,
        name: 'Blue Hoodie',
        price: '£24.99'
    }
]

function Products() {
    const [products, setProducts] = useState(allProducts);

    const addToCart = () => {
        alert('added to cart');
    }

    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <Product image={product.image} name={product.name} price={product.price} addToCart={addToCart}/>
                )
            })}
        </div>
    )
}

export default Products;