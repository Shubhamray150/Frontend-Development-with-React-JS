import React from "react";
import Slider from "../userInterface/Slider";
import NowPlaying from "../userInterface/NowPlaying";
import Widget from "../userInterface/Widget";
import TopMovies from "../userInterface/TopMovies";
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import { setMovies } from "../../store/movieSlice";

const UserBody = () => {
  const dispatch = useDispatch();
  const { movies } = useFetch();
  dispatch(setMovies(movies));

  return (
    <div>
      <Slider />
      <NowPlaying />
      <Widget />
      <TopMovies />
    </div>
  );
};

export default UserBody;
