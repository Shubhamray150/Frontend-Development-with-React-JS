import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import "./App.css";
import Movies from "./component/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function buttonClickHandler() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("://swapi.tech/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setMovies(data.result);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  return (
    <>
      {isLoading && <BeatLoader />}
      {!isLoading && <Movies data={movies} />}
      {error && <p>{error}</p>}

      <button onClick={buttonClickHandler}>Fetch</button>
    </>
  );
}

export default App;
