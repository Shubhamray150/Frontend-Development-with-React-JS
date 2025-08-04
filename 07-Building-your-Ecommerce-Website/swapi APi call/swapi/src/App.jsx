import { useState } from "react";

import "./App.css";
import Movies from "./component/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  async function buttonClickHandler() {
    const response = await fetch("https://swapi.tech/api/films/");

    const data = await response.json();
    setMovies(data.result);
  }
  return (
    <>
      <Movies data={movies} />
      <button onClick={buttonClickHandler}>Fetch</button>
    </>
  );
}

export default App;
