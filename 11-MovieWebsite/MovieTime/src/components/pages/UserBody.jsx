import React from "react";
import Slider from "../userInterface/Slider";
import NowPlaying from "../userInterface/NowPlaying";
import Widget from "../userInterface/Widget";
import TopMovies from "../userInterface/TopMovies";

const UserBody = () => {
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
