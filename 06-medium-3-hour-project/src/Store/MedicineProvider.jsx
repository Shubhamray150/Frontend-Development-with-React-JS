import React, { useState } from "react";
import medicineContext from "./medicinecontext";

const MedicineProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemHandler = (data) => {
    setItem((prevState) => {
      const existItem = prevState.find(
        (item) =>
          item.name.trim().toLowerCase() == data.name.trim().toLowerCase()
      );

      if (existItem) {
        return prevState.map((i) => {
          if (i.name.trim().toLowerCase() == data.name.trim().toLowerCase()) {
            return { ...i, quantity: i.quantity + data.quantity };
          } else {
            return i;
          }
        });
      } else {
        return [...prevState, data];
      }
    });
  };

  const removeItemHandler = (data) => {
    setItem((prevState) => {
      const newData = prevState.map((i) => {
        if (data.name.trim() == i.name.trim()) {
          return { ...i, quantity: i.quantity - 1 };
        } else {
          return i;
        }
      });
      return newData.filter((i) => i.quantity > 0);
    });
  };
  
  const medicineCtx = {
    medicineItem: item,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <medicineContext.Provider value={medicineCtx}>
      {props.children}
    </medicineContext.Provider>
  );
};

export default MedicineProvider;
