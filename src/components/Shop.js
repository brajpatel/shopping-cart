import "../styles/Shop.css";
import React, { useState } from "react";
import uniqid from "uniqid";
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
        price: 28.99,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac turpis egestas sed tempus urna et pharetra pharetra umbasa.',
        quantity: 1,
        id: uniqid()
    },
    {
        image: greyHoodie,
        name: 'Grey Hoodie',
        price: 26.99,
        info: 'Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Iaculis eu non diam phasellus vestibulum.',
        quantity: 1,
        id: uniqid()
    },
    {
        image: redHoodie,
        name: 'Red Hoodie',
        price: 26.99,
        info: 'Gravida quis blandit turpis cursus in hac. an sit amet nulla facilisi morbi tempus iaculis urna. Elementum nisi quis.',
        quantity: 1,
        id: uniqid()
    },
    {
        image: blueHoodie,
        name: 'Blue Hoodie',
        price: 24.99,
        info: 'Sit amet commodo nulla facilisi. Tincidunt sa placerat duis. Ut placerat orci nulla pellentesque. In nisl nisi scelerisque.',
        quantity: 1,
        id: uniqid()
    },
    {
        image: yellowHoodie,
        name: 'Yellow Hoodie',
        price: 22.99,
        info: 'Et egestas quis ipsum suspendisse ultrices gravida. Ut aliquam purus sit amet. Sed tempus urna et pharetra pharetra.',
        quantity: 1,
        id: uniqid()
    },
    {
        image: pinkHoodie,
        name: 'Pink Hoodie',
        price: 24.99,
        info: 'Egestas sed tempus urna et pharetra pharetra sassa bassa ultricies. Leo integer malesuada maecenas accumsan. Commodo umbasa.',
        quantity: 1,
        id: uniqid()
    }
]

function Shop(props) {
    const { addToCart } = props;
    const [products, setProducts] = useState(allProducts);

    return (
        <div className="shop">
            <div className="products">
                <h2>Shop Our Products</h2>
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <img src={product.image} alt={product.name}/>
                            <div className="product-info">
                                <p className="product-card-name">{product.name}</p>
                                <p className="product-card-price">£{product.price}</p>
                                <p className="product-card-info">{product.info}</p>
                                <button type="button" className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop;