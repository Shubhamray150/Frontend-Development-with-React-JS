import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import "./MedicineCart.css";
import MedicineCartItem from "./MedicineCartItem";
import cartContext from "../../../Store/cartContext";

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
  const cartCtx = useContext(cartContext);

  const billGenerateHandler = () => {
    cartCtx.removeItem();
  };

  const totalQuantity = cartCtx.cartItem.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);
  return (
    <Modal onClose={props.onClose}>
      <ul>
        {cartCtx.cartItem.map((item) => {
          return <MedicineCartItem item={item} />;
        })}
      </ul>
      <div className="totalquantity">
        <h3>Total</h3>
        <h3>{totalQuantity}</h3>
      </div>
      <div className="genBtn">
        <button className="generateBtn" onClick={billGenerateHandler}>
          Generate Bill
        </button>
      </div>
    </Modal>
  );
};

export default MedicineCart;
