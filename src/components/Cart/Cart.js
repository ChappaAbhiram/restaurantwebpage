import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const combinedCart = {};
  for (const item of cartCtx.items) {
    const itemkey = `${item.id}`;
    if (combinedCart[itemkey]) {
      combinedCart[itemkey].quantity += item.quantity;
    } else {
      combinedCart[itemkey] = { ...item };
    }
  }
  const removeItemHandler = (itemId) => {
    cartCtx.removeItem(itemId);
  };
  const reduceQuantityHandler = (itemId) => {
    cartCtx.updateItemQuantity(itemId);
  };
  const increaseItemHandler = (itemId) =>{
    cartCtx.increaseItemQuantity(itemId);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Object.values(combinedCart).map((item) => (
        <li key={item.id}>
          <div>
            <span className={classes.name}>Name: {item.name}</span>
            <span className={classes.price}>Price: {item.price}</span>
            <span className={classes.quantity}>Quantity: {item.quantity}</span>
            <button
            style={{
              float: "right",
              backgroundColor: "lightblue",
              fontWeight: "bold",
              marginLeft :"5px"
            }} onClick={() => increaseItemHandler(item.id)}
            >+</button>
            {item.quantity === 1?  (
              <button
                 style={{
                float: "right",
                backgroundColor: "lightblue",
                fontWeight: "bold",
              }}
                onClick={() => removeItemHandler(item.id)}
              >
                -
              </button>
            ) :
            (<button
              style={{
                float: "right",
                backgroundColor: "lightblue",
                fontWeight: "bold",
              }}
              onClick={() => reduceQuantityHandler(item.id)}
            >
              -
            </button>)}
          </div>
        </li>
      ))}
    </ul>
  );
  const totalAmount = Object.values(combinedCart).reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
