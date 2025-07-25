import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    setItem((prevState) => {
      return [...prevState, item];
    });
  };

  const updateItemHandler = (id) => {};

  const removeItemFromCartHandler = (id) => {
    setItem((prevState) => {
      return prevState.filter((val) => val.id != id);
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
