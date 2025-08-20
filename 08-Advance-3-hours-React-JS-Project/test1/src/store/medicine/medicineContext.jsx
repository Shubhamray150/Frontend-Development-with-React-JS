import React from "react";

const medicineContext = React.createContext({
  medicineItem: [],
  addMedicineItem: (data) => {},
  removeMedicinItem: (data) => {},
});

export default medicineContext;
