import React, { useState } from "react";
import "./AddMovies.css";

const AddMovies = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const userInputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (
      userInput.openingText.trim().length == 0 ||
      userInput.releaseDate.trim().length == 0 ||
      userInput.title.trim().length == 0
    ) {
      alert("Fill all the fields");
      return;
    }

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

    setUserInput({
      title: "",
      openingText: "",
      releaseDate: "",
    });
    props.onAddMovie();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="addMovies">
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={userInput.title}
            onChange={userInputHandler}
          />
        </div>
        <div className="openingText">
          <label htmlFor="openingText">Opening Text</label>
          <input
            type="text"
            name="openingText"
            id="openingText"
            value={userInput.openingText}
            onChange={userInputHandler}
          />
        </div>
        <div className="releaseDate">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={userInput.releaseDate}
            id="releaseDate"
            onChange={userInputHandler}
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
