import React, { useEffect } from "react";
import AdminHeader from "./admin/AdminHeader";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./admin/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "./hooks/useFetch";
import { setMovies } from "../store/movieSlice";

const AdminLayout = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { movies, error } = useFetch();
  const storedMovies = useSelector((state) => state.movies.list);

  useEffect(() => {
    if (movies.length > 0) {
      dispatch(setMovies(movies));
    }
  }, [movies, dispatch]);

  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminSideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
