import React from "react";
import "./Medicine.css";
import MedicineForm from "./medicineform/MedicineForm";
import Cart from "./medicineform/Cart";

const Medicine = (props) => {
  return (
    <div className="medicineHeader">
      <MedicineForm />
      <Cart onShow={props.onShow} />
    </div>
  );
};

export default Medicine;
