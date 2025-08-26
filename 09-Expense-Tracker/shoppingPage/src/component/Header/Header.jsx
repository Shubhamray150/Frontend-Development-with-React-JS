import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartReducer";

const Header = () => {
  const dispatch = useDispatch();

  const cartHandlerBtn = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <div className="flex justify-between bg-black p-8 items-center">
      <h1 className="font-bold text-3xl ml-8 text-white">ReduxCart</h1>
      <button
        onClick={cartHandlerBtn}
        className="flex items-center border border-blue-500 rounded-md py-2 px-12 mr-10 gap-x-2"
      >
        <h1 className="font-semibold text-blue-500">My Cart</h1>
        <span className="bg-blue-500 border px-3 rounded-xl p-1">0</span>
      </button>
    </div>
  );
};

export default Header;
