import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth.jsx";
import uiSlice from "./uiSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});
