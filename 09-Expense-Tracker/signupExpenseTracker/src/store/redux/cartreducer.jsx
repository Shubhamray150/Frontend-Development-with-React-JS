import { createSlice } from "@reduxjs/toolkit";

const initalCart = { cartIsVisible: false };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initalCart,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
