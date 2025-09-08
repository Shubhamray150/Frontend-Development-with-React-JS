import React from "react";

const CartButton = ({ onToggleCart }) => {
  return (
    <button
      onClick={onToggleCart}
      className="flex border w-25 justify-center rounded-md m-2 px-2 py-1"
    >
      CartButton
    </button>
  );
};

export default CartButton;
