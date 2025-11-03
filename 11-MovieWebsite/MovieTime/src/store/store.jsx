import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./adminAuthSlice";
import bookedMoviesReducer from "./bookedMoviesSlice";
import moviesReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookedMovies: bookedMoviesReducer,
    movies: moviesReducer,
  },
});

export default store;
