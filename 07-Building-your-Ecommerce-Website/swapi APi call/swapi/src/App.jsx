import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import AddMovies from "./component/AddMovies";

import "./App.css";
import Movies from "./component/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function buttonClickHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-6389d-default-rtdb.firebaseio.com/"
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setMovies(data.result);
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
      <AddMovies />
      {isLoading && <BeatLoader />}
      {!isLoading && <Movies data={movies} />}
      {error && <p>{error}</p>}

      <button onClick={buttonClickHandler}>Fetch</button>
    </>
  );
}

export default App;
