import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id)=>{ },
    message : 'I am accessible everywhere'
});
export default CartContext;