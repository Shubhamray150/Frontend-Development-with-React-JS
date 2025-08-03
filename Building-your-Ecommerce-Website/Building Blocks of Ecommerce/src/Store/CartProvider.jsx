import React, { useState } from "react";
import cartContext from "./cartContext";

// title: 'Black and white Colors',
// price: 50,
// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
// quantity: 3,

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemHandler = (data) => {
    setItem((prevState) => {
      const existingItem = prevState.find((i) => data.title == i.title);
      if (existingItem) {
        return prevState.map((i) => {
          if (i.title == data.title) {
            return { ...i, quantity: i.quantity + 1 };
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
    cartItem: item,
    addItem: addItemHandler,
  };

  return (
    <cartContext.Provider value={cartCtx}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
