import React from "react";

function Product(props) {
    const { image, name, price, addToCart } = props;

    return (
        <div className="product">
            <img src={image} alt="product" />
            <div className="product-info">
                <p className="product-card-name">{name}</p>
                <p className="product-card-price">{price}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;