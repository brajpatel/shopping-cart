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
        price: '£28.99',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac turpis egestas sed tempus urna et pharetra pharetra umbasa.'
    },
    {
        image: greyHoodie,
        name: 'Grey Hoodie',
        price: '£26.99',
        info: 'Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Iaculis eu non diam phasellus vestibulum.'
    },
    {
        image: redHoodie,
        name: 'Red Hoodie',
        price: '£26.99',
        info: 'Gravida quis blandit turpis cursus in hac. an sit amet nulla facilisi morbi tempus iaculis urna. Elementum nisi quis.'
    },
    {
        image: blueHoodie,
        name: 'Blue Hoodie',
        price: '£24.99',
        info: 'Sit amet commodo nulla facilisi. Tincidunt sa placerat duis. Ut placerat orci nulla pellentesque. In nisl nisi scelerisque.'
    },
    {
        image: yellowHoodie,
        name: 'Yellow Hoodie',
        price: '£22.99',
        info: 'Et egestas quis ipsum suspendisse ultrices gravida. Ut aliquam purus sit amet. Sed tempus urna et pharetra pharetra.'
    },
    {
        image: pinkHoodie,
        name: 'Pink Hoodie',
        price: '£24.99',
        info: 'Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Leo integer malesuada maecenas accumsan. Commodo umbasa.'
    }
]

function Products() {
    const [products, setProducts] = useState(allProducts);

    const addToCart = () => {
        alert('added to cart');
    }

    return (
        <div className="products">
            <h2>Shop Our Products</h2>
            {products.map((product) => {
                return (
                    <Product image={product.image} name={product.name} price={product.price} info={product.info} addToCart={addToCart}/>
                )
            })}
        </div>
    )
}

export default Products;