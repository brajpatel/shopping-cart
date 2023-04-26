import React from "react";

function Product(props) {
    const { image, name, price, info, addToCart, delay } = props;

    return (
        <div className="product" style={{ animationDelay: delay }}>
            <img src={image} alt="product" />
            <div className="product-info">
                <p className="product-card-name">{name}</p>
                <p className="product-card-price">{price}</p>
                <p className="product-card-info">{info}</p>
                <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;