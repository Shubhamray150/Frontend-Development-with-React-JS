import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import expenseReducer from "./expenseReducer";
import cartReducer from "./cartreducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    cart: cartReducer,
  },
});
export default store;
