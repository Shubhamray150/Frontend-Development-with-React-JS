import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import Cart from "./component/cart/HeaderCartButton";

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
      <div>
        {cartIsShown && <Cart />}
        <Header onShowCart={showCartHandler} />
        <Body />
      </div>
    </>
  );
}

export default App;
