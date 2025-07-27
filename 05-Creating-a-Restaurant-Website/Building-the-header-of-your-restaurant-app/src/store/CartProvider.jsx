import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    setItem((prevState) => {
      return [...prevState, item];
    });
  };

  const updateItemHandler = (cartItem) => {
    setItem((prevState) => {
      return prevState.map((item) => {
        if (item.id == cartItem.id) {
          return {
            ...cartItem,
          };
        } else {
          return item;
        }
      });
    });
  };

  const removeItemFromCartHandler = (item) => {
    setItem((prevState) => {
      return prevState.filter((val) => val.id != item.id);
    });
  };

  const cartContext = {
    items: item,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItemHandler: updateItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
