import React from "react";
import { goi, getRandomColor } from "../helpers";

function Grid({ cells, setCells, isPlaying, isColor, shape }) {
  const draw = (y, x) => () => setCells(drawShape(cells, y, x, shape));

  const table = [];
  let i;
  for (i = 0; i < Math.round(cells.length); i++) {
    const row = [];
    let j;
    for (j = 0; j < cells[i].length; j++) {
      row.push(
        <td
          key={`${i}_${j}`}
          onClick={!isPlaying ? draw(i, j) : undefined}
          style={{
            backgroundColor: cells[i][j]
              ? isColor
                ? getRandomColor()
                : "#61dafb"
              : undefined
          }}
        />
      );
    }
    table.push(<tr key={`${i}`}>{row}</tr>);
  }

  return (
    <table align="center">
      <tbody>{table}</tbody>
    </table>
  );
}

function drawShape(grid, y, x, shape) {
  let newGrid = [...grid];
  let i;
  for (i = 0; i < shape.length; i++) {
    let j;
    for (j = 0; j < shape[i].length; j++) {
      const yIndex = goi(newGrid, y + i);
      const xIndex = goi(newGrid[yIndex], x + j);
      newGrid[yIndex][xIndex] = shape[i][j];
    }
  }
  return newGrid;
}

export default Grid;
