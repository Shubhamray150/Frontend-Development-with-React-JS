import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import CartButton from "./component/Cart/CartButton";

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div>
        <div className="flex justify-end">
          <CartButton onToggleCart={toggleCart} />
        </div>
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
