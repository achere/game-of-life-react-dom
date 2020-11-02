import React from "react";
import shapes from "../shapes";

function Shapes({ cells, isPlaying, setShape }) {
  return (
    <select
      disabled={isPlaying}
      onChange={e => setShape(shapes[e.target.value])}
    >
      {Object.keys(shapes).map(name => (
        <option
          disabled={
            cells.length < shapes[name].length ||
            cells[0].length < shapes[name][0].length
          }
          key={name}
          value={name}
        >
          {name}
        </option>
      ))}
    </select>
  );
}

export default Shapes;
