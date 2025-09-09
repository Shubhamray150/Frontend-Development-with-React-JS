import React from "react";

const cartContext = React.createContext({
  cartItem: [],
  addCartItem: (item) => {},
});

export default cartContext;
