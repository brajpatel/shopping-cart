import React from "react";

function Product(props) {
    const { image, name, price, addToCart } = props;

    return (
        <div className="product">
            <img src={image} alt="product" />
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;