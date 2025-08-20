import React from "react";
import CartItem from "./CartItem";
import CartList from "./CartList";

const HeaderCartButton = (props) => {
  return (
    <button
      onClick={props.onShowCart}
      className="border border-black px-8 rounded-lg bg-blue-400 font-bold text-white"
    >
      Cart Item
    </button>
  );
};

export default HeaderCartButton;
