import React from "react";

const cartContext = React.createContext({
  id: "",
  cartItem: [],
  addItem: (item) => {},
});

export default cartContext;
