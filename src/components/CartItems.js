import React from "react";

function CartItems(props) {
    const { cartSize, cartItems, cartPrice, increaseQuantity, decreaseQuantity, removeFromCart } = props;
    const deliveryPrice = 5.99;
    const totalPrice = Number((cartPrice + deliveryPrice).toFixed(2));

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
                <p><span>{cartSize} ITEMS:</span> £{cartPrice}</p>
                <p><span>DELIVERY:</span> £{deliveryPrice}</p>
                <p>TOTAL: £{totalPrice}</p>
            </div>
        </div>
    )
}

export default CartItems;