import React from "react";

const createContext = React.createContext({
  cartItem: [],
  addCartItem: (item) => {},
  removeCartItem: (item) => {},
});

export default createContext;
