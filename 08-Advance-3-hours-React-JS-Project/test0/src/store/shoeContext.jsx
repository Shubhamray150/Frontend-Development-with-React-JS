import React from "react";

const shoeContext = React.createContext({
  shoeItem: [],
  addShoeItem: (item) => {},
  removeShoeItem: (item) => {},
});

export default shoeContext;
