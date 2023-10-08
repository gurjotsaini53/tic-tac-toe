import { useState } from "react";
import Game from "./components/Game";
import Company from "./components/Company";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Game />
        <Company />
      </div>
    </>
  );
}

export default App;
