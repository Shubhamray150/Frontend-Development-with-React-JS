import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Ul/Modal";
import cartContext from "../../store/cart-context";
import CartItemList from "./CartItemList";

const Cart = (props) => {
  const cartctx = useContext(cartContext);
  // console.log(cartctx.items);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItemList item={item} />
      ))}
    </ul>
  );

  const totalAmount = cartctx.items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>{Math.round(totalAmount)}</span>
        <span></span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
