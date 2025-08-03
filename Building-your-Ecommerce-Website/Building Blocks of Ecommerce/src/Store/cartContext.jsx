import React from "react";

const cartContext = React.createContext({
  cartItem: [],
  addItem: (item) => {},
});

export default cartContext;
