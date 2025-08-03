import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Body />
      <Footer />
    </CartProvider>
  );
}

export default App;
