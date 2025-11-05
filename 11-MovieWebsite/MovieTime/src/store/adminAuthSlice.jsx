import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    email: null,
    token: null || localStorage.getItem("adminToken"),
  },
  reducers: {
    loginAdmin: (state, action) => {
      state.email = action.payload.admin;
      state.token = action.payload.token;
      localStorage.setItem("adminToken", state.token);
    },
    logoutAdmin: (state) => {
      state.email = null;
      state.token = null;
      localStorage.removeItem("adminToken");
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
