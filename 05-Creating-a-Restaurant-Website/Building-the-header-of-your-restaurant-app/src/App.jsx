import { useState } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Body from "./Body";
import Modal from "./components/Ul/Modal";
import Card from "./components/Ul/Card";
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
