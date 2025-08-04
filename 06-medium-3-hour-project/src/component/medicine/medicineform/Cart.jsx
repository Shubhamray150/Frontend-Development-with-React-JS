import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartOpenHandler = () => {
    props.onShow();
  };
  return (
    <button className="cartBtn" onClick={cartOpenHandler}>
      Cart
    </button>
  );
};

export default Cart;
