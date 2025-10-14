import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSignUp: true,
  isLogIn: !!localStorage.getItem("token"),
  email: null,
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.isLogIn = true;
      state.token = action.payload.token;
    },
    setShowSignup: (state) => {
      state.showSignUp = !state.showSignUp;
    },
    setLogout: (state) => {
      state.token = null;
      state.email = null;
      localStorage.removeItem("token");
      state.isLogIn = false;
    },
  },
});
export const { setLogin, setShowSignup, setLogout } = authSlice.actions;

export default authSlice.reducer;
