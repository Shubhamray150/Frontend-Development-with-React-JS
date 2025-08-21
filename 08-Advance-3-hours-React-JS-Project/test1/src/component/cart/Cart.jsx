import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <div>
        <h1>hey there</h1>
      </div>
    </Modal>
  );
};

export default Cart;
