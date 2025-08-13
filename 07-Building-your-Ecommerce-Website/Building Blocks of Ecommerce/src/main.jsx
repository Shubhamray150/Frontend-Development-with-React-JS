import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./Store/AuthContext.jsx";
import CartProvider from "./Store/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthContextProvider>
);
