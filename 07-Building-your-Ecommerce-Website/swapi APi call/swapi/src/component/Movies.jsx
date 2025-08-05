import React from "react";

const Movies = (props) => {
  const { id, title, openingText, releaseDate } = props.data;
  console.log(id, title, openingText, releaseDate);

  const deleteBtnHandler = async () => {
    props.loading(true);
    const deletedata = await fetch(
      `https://react-http-6389d-default-rtdb.firebaseio.com/movies/${id}.json`,
      { method: "DELETE" }
    );
    props.onDeleteMovie();
  };

  return (
    <li>
      <div>{title}</div>
      <div>{openingText}</div>
      <div>{releaseDate}</div>
      <button onClick={deleteBtnHandler}>Delete</button>
    </li>
  );
};

export default Movies;
