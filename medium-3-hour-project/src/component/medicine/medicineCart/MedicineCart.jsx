import React from "react";
import Modal from "../../UI/Modal";
import "./MedicineCart.css";
import Card from "../../UI/Card";
import MedicineCartItem from "./MedicineCartItem";

const dummyData = [
  {
    id: "m1",
    name: "dolo",
    description: "for fever",
    price: "20",
    quantity: "200",
  },
  {
    id: "m2",
    name: "paracetamol",
    description: "for fever",
    price: "20",
    quantity: "100",
  },
];

const MedicineCart = (props) => {
  const totalQuantity = 0;
  return (
    <Modal onClose={props.onClose}>
      <ul>
        {dummyData.map((item) => {
          return <MedicineCartItem item={item} />;
        })}
      </ul>
      <div className="totalquantity">
        <h3>Total</h3>
        <h3>{totalQuantity}</h3>
      </div>
      <div className="genBtn">
        <button className="generateBtn">Generate Bill</button>
      </div>
    </Modal>
  );
};

export default MedicineCart;
