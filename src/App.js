import React, { useEffect, useState } from "react";
import os from "os";
import "./App.css";

require("dotenv").config();

function App() {
  const exampleReq =
    "https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}type=user&q=chicken&field=uri&field=label";
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("effect has been run");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setcounter(counter + 1)}>{counter}</h1>
    </div>
  );
}
export default App;
