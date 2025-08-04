import React from "react";
import CartProvider from "../../Store/CartProvider";
import Header from "./Header";
import Footer from "../footer/Footer";
import Body from "../body/Body";

const Store = () => {
  return (
    <CartProvider>
      <Header />
      <Body />
      <Footer />
    </CartProvider>
  );
};

export default Store;
