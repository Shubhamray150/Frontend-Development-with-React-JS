import { createSlice } from "@reduxjs/toolkit";

const bookedMoviesSlice = createSlice({
  name: "bookedMovies",
  initialState: {
    items: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.items.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.items = state.items.filter((b) => b.bookingId !== action.payload);
    },
    setBookings: (state, action) => {
      state.items = action.payload;
    },
    clearBookings: (state) => {
      state.items = [];
    },
  },
});

export const { addBooking, removeBooking, setBookings, clearBookings } =
  bookedMoviesSlice.actions;

export default bookedMoviesSlice.reducer;
