import React, { useContext } from "react";
import cartContext from "../../store/CartContext";

const CartButton = ({ onOpenCart }) => {
  const cartCtx = useContext(cartContext);
  const totalValue = cartCtx.cartItem.reduce((quantity, item) => {
    return quantity + item.small + item.medium + item.large;
  }, 0);

  return (
    <button
      onClick={onOpenCart}
      className="bg-blue-700 text-white w-35  rounded-xl m-2 px-2 py-2 hover:bg-blue-800 cursor-pointer"
    >
      CartButton
      <span className="bg-white text-blue-700 font-bold rounded-xl mx-1 px-2 py-1">
        {totalValue}
      </span>
    </button>
  );
};

export default CartButton;
