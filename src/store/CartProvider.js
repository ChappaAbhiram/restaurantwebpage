import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        const existingItemIndex = items.findIndex(existingItem => existingItem.id === item.id);

        if (existingItemIndex !== -1) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += item.quantity;
          setItems(updatedItems);
        }
        else{
        setItems((prevItems) => [...prevItems, item]);
        }
    };

    const removeItemHandler = (itemId) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };
    // const IncreaseItemHandler=(itemId)=>{
    //     setItems((prevItems)=>{
    //         return prevItems.map(item=>{
    //             if(item.id==itemId){
    //                 return{...item,quantity : item.quantity+1}
    //             }
    //         })
    //     })
    // }
    const updateItemQuantity=(itemId)=>{
        setItems((prevItems)=>{
            return prevItems.map(item=>{
                if(item.id===itemId){
                    return{...item,quantity : item.quantity-1}
                }
                return item;
            })
        })
    }
    const increaseItemQuantity= (itemId) =>{
        setItems((prevItems)=>{
            return prevItems.map(item=>{
                if(item.id===itemId){
                    return{...item,quantity : item.quantity+1}
                }
                return item;
            })
        })
    }
    const contextValue = {
        items: items,
        totalAmount : 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        updateItemQuantity : updateItemQuantity,
        increaseItemQuantity : increaseItemQuantity
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

