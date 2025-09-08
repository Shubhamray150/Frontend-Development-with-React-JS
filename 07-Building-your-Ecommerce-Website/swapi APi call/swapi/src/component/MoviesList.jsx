import React from "react";
import "./MoviesList.css";
import Movies from "./Movies";

const MoviesList = (props) => {
  return (
    <ul className="ulMoviesList">
      {props.data.map((item) => (
        <Movies
          onFetchMovies={props.onFetchMovies}
          loading={props.loading}
          key={item.id}
          data={item}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
