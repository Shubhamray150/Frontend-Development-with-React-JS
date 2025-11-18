import { createSlice } from "@reduxjs/toolkit";

const localToken = localStorage.getItem("token");

const initialAuthState = {
  token: localToken || "",
  isLoggedIn: !!localToken,
  varified: false,
  name: "",
  photo: "",
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
      state.name = "";
      state.photo = "";
      localStorage.removeItem("token");
    },

    updateProfile(state, action) {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
