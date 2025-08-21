import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import Cart from "./component/cart/Cart";

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
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Body />
      </div>
    </>
  );
}

export default App;
