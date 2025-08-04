import React, { useContext } from "react";
const cartContext = React.createContext({
  cartItem: [],
  addItem: (data) => {},
  removeItem: (data) => {},
});

export default cartContext;
