import { useState } from "react";
import "./App.css";
import Medicine from "./component/medicine/Medicine";
import MedicineList from "./component/body/MedicineList";
import MedicineProvider from "./Store/MedicineProvider";
import MedicineCart from "./component/medicine/medicineCart/MedicineCart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <MedicineProvider>
      <CartProvider>
        {showCart && <MedicineCart onClose={closeCartHandler} />}
        <Medicine onShow={showCartHandler} />
        <MedicineList />
      </CartProvider>
    </MedicineProvider>
  );
}

export default App;
