import React, { useContext, useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addCartItemHandler = (data) => {
    setCartItem((prevItem) => {
      return [...prevItem, data];
    });
  };
  const removeCartItemHandler = (data) => {};

  const cartCtx = {
    cartItem: cartItem,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
