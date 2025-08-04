import React, { useContext } from "react";
const medicineContext = React.createContext({
  medicineItem: [],
  addItem: (data) => {},
  removeItem: (data) => {},
});

export default medicineContext;
