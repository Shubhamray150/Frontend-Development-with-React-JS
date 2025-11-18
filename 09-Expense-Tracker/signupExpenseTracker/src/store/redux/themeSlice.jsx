import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  premium: JSON.parse(localStorage.getItem("premium")) || false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setPremium: (state, action) => {
      if (!action.payload) {
        state.premium = false;
        localStorage.removeItem("premium");
        localStorage.removeItem("theme");
        state.theme = "light";
      } else {
        state.premium = true;
        localStorage.setItem("premium", "true");
      }
    },
  },
});

export const { toggleTheme, setPremium } = themeSlice.actions;
export default themeSlice.reducer;
