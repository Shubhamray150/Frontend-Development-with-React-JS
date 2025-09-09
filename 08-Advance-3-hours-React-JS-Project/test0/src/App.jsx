import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import CartButton from "./component/Cart/CartButton";
import Modal from "./component/UI/Modal";

function App() {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <div className="flex justify-end items-center my-2 mx-4 ">
        <h1 className="flex-1 text-center font-bold text-3xl text-red-700">
          Shoe Shop
        </h1>
        <CartButton onOpenCart={openCart} />
      </div>
      {showCart && <Modal onClose={closeCart} />}
      <Header />
      <Body />
    </>
  );
}

export default App;
