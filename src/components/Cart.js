import React from "react";
import EmptyCart from "./EmptyCart";

function Cart(props) {
    const { cartItems } = props;

    return (
        <div className="cart-page">
            <h2>Your Cart <i className="fa-solid fa-cart-shopping"></i></h2>
                {cartItems.length ?
                <div className="cart">
                    <div className="cart-items">
                        <div className="cart-info">
                            <p>Item</p>
                            <p>Quantity</p>
                            <p>Price</p>
                        </div>
                        {cartItems.map((item) => {
                            return (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <img src={item.image} alt={item.name}/>
                                        <div>
                                            <p>{item.name}</p>
                                            <p>Product Code: {item.id}</p>
                                        </div>
                                    </div>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-price">Price: £{item.price}</p>
                                    <div className="remove-item-container">
                                        <button className="remove-item">Remove Item</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total">Subtotal: £0.00</div>
                </div> :
                <EmptyCart/>
                }
        </div>
    )
}

export default Cart;