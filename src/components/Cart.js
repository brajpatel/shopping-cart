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
                                    <div className="cart-item-quantity">
                                        <button>-</button>
                                        <p>{item.quantity}</p>
                                        <button>+</button>
                                    </div>
                                    <p className="cart-item-price">£{item.price}</p>
                                    <div className="remove-item-container">
                                        <button className="remove-item">Remove Item</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total">
                        <p>0 Items: £0.00</p>
                        <p>DELIVERY: £3.99</p>
                        <p>TOTAL: ~~~ BOLD ~~~</p>
                    </div>
                </div> :
                <EmptyCart/>
                }
        </div>
    )
}

export default Cart;