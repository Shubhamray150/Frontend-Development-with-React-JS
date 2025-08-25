import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/redux/store.jsx";
import { ExpenseContextProvider } from "./store/expenseContext";
import { ExpenseDataContextProvider } from "./store/expeseDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <ExpenseContextProvider>
    <ExpenseDataContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ExpenseDataContextProvider>
  </ExpenseContextProvider>
);
