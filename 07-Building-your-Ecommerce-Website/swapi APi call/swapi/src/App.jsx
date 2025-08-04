import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import "./App.css";
import Movies from "./component/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function buttonClickHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.tech/api/films/");
    const data = await response.json();
    setMovies(data.result);
    setIsLoading(false);
  }
  return (
    <>
      {isLoading && <BeatLoader />}
      {!isLoading && <Movies data={movies} />}

      <button onClick={buttonClickHandler}>Fetch</button>
    </>
  );
}

export default App;
