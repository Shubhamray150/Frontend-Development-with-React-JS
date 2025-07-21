import { useState } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Body from "./Body";
import Modal from "./components/Ul/Modal";
import Cart from "./components/Cart/Cart";
import { Fa0 } from "react-icons/fa6";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Body />
    </>
  );
}

export default App;
