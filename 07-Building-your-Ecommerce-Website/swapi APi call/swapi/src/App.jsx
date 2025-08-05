import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import AddMovies from "./component/AddMovies";

import "./App.css";
import Movies from "./component/Movies";
import MoviesList from "./component/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function buttonClickHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-6389d-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
      let loadedMovies = [];

      for (let key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].userInput.title,
          openingText: data[key].userInput.openingText,
          releaseDate: data[key].userInput.releaseDate,
        });
      }

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError("Something went wrong");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    buttonClickHandler();
  }, []);

  return (
    <>
      <section className="fetchButton">
        <button onClick={buttonClickHandler}>Fetch</button>
      </section>
      <AddMovies onAddMovie={buttonClickHandler} />
      {isLoading && <BeatLoader />}
      {!isLoading && (
        <MoviesList
          onDeleteMovie={buttonClickHandler}
          loading={setIsLoading}
          data={movies}
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
