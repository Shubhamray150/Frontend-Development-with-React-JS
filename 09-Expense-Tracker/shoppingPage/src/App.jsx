import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./component/cart/Cart";
import MainHeader from "./component/Layout/MainHeader";
import Products from "./component/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.cart.cartIsVisible);
  console.log(showCart);

  return (
    <div className="center-container">
      <MainHeader />
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
