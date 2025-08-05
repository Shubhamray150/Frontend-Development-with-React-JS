import React from "react";
import "./MoviesList.css";
import Movies from "./Movies";

const MoviesList = (props) => {
  return (
    <div className="moviesList">
      <ul className="ulMoviesList">
        {props.data.map((item) => (
          <Movies
            onDeleteMovie={props.onDeleteMovie}
            loading={props.loading}
            key={item.id}
            data={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
