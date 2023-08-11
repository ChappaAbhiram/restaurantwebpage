import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const removeItemHandler = (itemId) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const contextValue = {
        items: items,
        totalAmount : 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

