import React, { useContext } from "react";
import "./MedicineItem.css";
import medicineContext from "../../Store/medicinecontext";
import cartContext from "../../Store/cartContext";

const MedicineItem = (props) => {
  const medCtx = useContext(medicineContext);
  const cartCtx = useContext(cartContext);

  const addCartBtnHandler = () => {
    medCtx.removeItem(props.data);
    cartCtx.addItem(props.data);
  };

  const { name, description, price, quantity } = props.data;

  return (
    <li className="list">
      <div className="items">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
      <div className="action">
        <button className="addToCart" onClick={addCartBtnHandler}>
          Add To Cart
        </button>
      </div>
    </li>
  );
};

export default MedicineItem;
