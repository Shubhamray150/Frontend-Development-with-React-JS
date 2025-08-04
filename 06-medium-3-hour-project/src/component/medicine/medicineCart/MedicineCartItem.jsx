import React from "react";
import "./MedicineCartItem.css";

const MedicineCartItem = (props) => {
  const { name, description, price, quantity } = props.item;
  return (
    <>
      <li className="cartMedItem">
        <h4>{name}</h4>
        <p>{description}</p>
        <span>{price}</span>
        <span>{quantity}</span>
      </li>
    </>
  );
};

export default MedicineCartItem;
