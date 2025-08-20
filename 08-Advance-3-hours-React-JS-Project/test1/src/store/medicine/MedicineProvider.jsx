import React, { useContext, useState } from "react";
import MedicineContext from "./medicineContext";

const MedicineProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  const addItemHandler = (data) => {
    setItem((prevData) => {
      return [...prevData, data];
    });
  };

  const removeItemHandler = () => {};

  const medicineCtx = {
    medicineItem: item,
    addMedicineItem: addItemHandler,
    removeMedicinItem: (data) => {},
  };

  return (
    <MedicineContext.Provider value={medicineCtx}>
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
