import React from "react";

function Product(props) {
    const { image } = props;
    
    return (
        <div className="product">
            <img src={image} alt="product" />
        </div>
    )
}

export default Product;