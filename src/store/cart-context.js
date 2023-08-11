import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id)=>{ },
    updateItemQuantity : (id)=>{},
    increaseItemQuantity : (id)=>{}
});
export default CartContext;