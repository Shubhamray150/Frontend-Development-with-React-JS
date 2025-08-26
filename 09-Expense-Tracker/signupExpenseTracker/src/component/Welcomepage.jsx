import React from "react";
import HomePage from "../pages/HomePage";
import Body from "./Body";
import Cart from "./cart/Cart";
import { useSelector } from "react-redux";

const Welcomepage = () => {
  const cartVisible = useSelector((state) => state.cart.cartIsVisible);
  console.log(cartVisible);

  return (
    <>
      <HomePage />
      {cartVisible && <Cart />}
      <Body />
    </>
  );
};

export default Welcomepage;
