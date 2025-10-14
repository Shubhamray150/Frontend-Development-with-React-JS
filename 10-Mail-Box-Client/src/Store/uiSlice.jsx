import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  activeLinkName: "Inbox",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLinkName = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setActiveLink } = uiSlice.actions;
export default uiSlice.reducer;
