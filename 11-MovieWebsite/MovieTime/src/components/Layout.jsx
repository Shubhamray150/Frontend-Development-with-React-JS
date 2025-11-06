import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { useDispatch } from "react-redux";
import useFetch from "./hooks/useFetch";
import { setMovies } from "../store/movieSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const { movies } = useFetch();
  
  useEffect(() => {
    if (movies) {
      dispatch(setMovies(movies));
    }
  }, [movies, dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
