import React, { use, useState } from "react";
import cartContext from "./cartContext";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const addCartItemHandler = (data) => {
    setCartItem((prevState) => {
      const existItem = prevState.find(
        (item) =>
          item.name.trim().toLowerCase() == data.name.trim().toLowerCase()
      );

      if (existItem) {
        return prevState.map((i) => {
          if (i.name.trim().toLowerCase() == data.name.trim().toLowerCase()) {
            return { ...i, quantity: 1 };
          } else {
            return i;
          }
        });
      } else {
        return [...prevState, data];
      }
    });
  };

  const cartCtx = {
    cartItem: cartItem,
    addItem: addCartItemHandler,
    removeItem: (data) => {},
  };
  return (
    <cartContext.Provider value={cartCtx}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
