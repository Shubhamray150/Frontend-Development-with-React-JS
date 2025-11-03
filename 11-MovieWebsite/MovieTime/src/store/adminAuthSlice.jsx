import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: null,
    token: null,
  },
  reducers: {
    loginAdmin: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
    },
    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
