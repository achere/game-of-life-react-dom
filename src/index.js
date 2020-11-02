import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Board from "./components/Board";

function App() {
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(25);

  return (
    <div className="App">
      <h1>Gaem of Lyfe</h1>
      <h4>
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">wiki</a>
      </h4>
      <div>
        Width:
        <input
          type="number"
          defaultValue={width}
          onBlur={(e) => {
            if (e.target.value >= 10 && e.target.value <= 100) {
              console.log(e.target.value);
              setWidth(e.target.value);
            } else e.target.value = width;
          }}
        />
        Height:
        <input
          type="number"
          defaultValue={height}
          onBlur={(e) => {
            if (e.target.value >= 10 && e.target.value <= 100)
              setHeight(e.target.value);
            else e.target.value = height;
          }}
        />
      </div>
      <Board width={width} height={height} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
