import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShoeProvider from "./store/ShoeProvider.jsx";
import CartProvider from "./store/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ShoeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ShoeProvider>
);
