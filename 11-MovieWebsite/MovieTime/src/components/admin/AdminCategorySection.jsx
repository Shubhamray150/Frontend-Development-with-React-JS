import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/movieSlice";

const AdminCategorySection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  useEffect(() => {
    const url =
      "https://movietime-5d6b9-default-rtdb.firebaseio.com/movies.json";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        const movieList = [];
        for (let key in data) {
          movieList.push({ id: key, ...data[key] });
        }
        dispatch(setMovies(movieList));
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  

  return <div></div>;
};

export default AdminCategorySection;
