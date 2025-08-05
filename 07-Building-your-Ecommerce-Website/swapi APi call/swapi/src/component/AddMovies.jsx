import React, { useState } from "react";
import "./AddMovies.css";

const AddMovies = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, title: event.target.value };
    });
  };
  const openingTextChangeHandler = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, openingText: event.target.value };
    });
  };
  const releaseDateChangeHandler = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, releaseDate: event.target.value };
    });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const NewMovieObj = userInput;
    const response = await fetch(
      "https://react-http-6389d-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify({ userInput }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setUserInput({
      title: "",
      openingText: "",
      releaseDate: "",
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="addMovies">
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="openingText">
          <label htmlFor="openingText">Opening Text</label>
          <input
            type="text"
            id="openingText"
            value={userInput.openingText}
            onChange={openingTextChangeHandler}
          />
        </div>
        <div className="releaseDate">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            value={userInput.releaseDate}
            id="releaseDate"
            onChange={releaseDateChangeHandler}
          />
        </div>
        <div className="action">
          <button className="addMoviesBtn">Add Movies</button>
        </div>
      </div>
    </form>
  );
};

export default AddMovies;
