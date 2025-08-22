import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ExpenseContextProvider } from "./store/expenseContext";

createRoot(document.getElementById("root")).render(
  <ExpenseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ExpenseContextProvider>
);
