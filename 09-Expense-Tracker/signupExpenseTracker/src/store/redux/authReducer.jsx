import { createSlice } from "@reduxjs/toolkit";

const localToken = localStorage.getItem("token");

const initialAuthState = {
  token: localToken || "",
  isLoggedIn: !!localToken,
  varified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
