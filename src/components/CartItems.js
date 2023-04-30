import React from "react";

function CartItems(props) {
    const { cartSize, cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = props;

    return (
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
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => increaseQuantity(item)}>+</button>
                            </div>
                            <p className="cart-item-price">£{item.price}</p>
                            <div className="remove-item-container">
                                <button className="remove-item" onClick={() => removeFromCart(item)}>Remove Item</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart-total">
                <p>{cartSize} ITEMS: £0.00</p>
                <p>DELIVERY: £3.99</p>
                <p>TOTAL: ~~~ BOLD ~~~</p>
            </div>
        </div>
    )
}

export default CartItems;