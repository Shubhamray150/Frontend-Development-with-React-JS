import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    setDark(state) {
      state.darkMode = true;
    },
    setLight(state) {
      state.darkMode = false;
    },
  },
});

export const themeSelector = themeSlice.actions;
export default themeSlice.reducer;
