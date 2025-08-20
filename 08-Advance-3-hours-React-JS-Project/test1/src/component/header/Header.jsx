import React, { useContext, useState } from "react";
import MedicineForm from "./MedicineForm";
import HeaderCartButton from "../cart/HeaderCartButton";

const Header = (props) => {
  return (
    <div className="flex justify-around mt-3">
      <MedicineForm />
      <HeaderCartButton onShowCart={props.onShowCart} />
    </div>
  );
};

export default Header;
