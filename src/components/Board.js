import React, { useEffect, useState } from "react";
import Controls from "./Controls";
import Grid from "./Grid";
import { useInterval } from "../hooks";
import { goi } from "../helpers";
import Shapes from "./Shapes";

function Board({ width, height }) {
  const [delay, setDelay] = useState(200);
  const [population] = useState(0.15);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isColor, setColor] = useState(false);
  const [shape, setShape] = useState([[true]]);
  const [cells, setCells] = useState(generateCells(width, height, () => false));
  useEffect(reset, [width, height]);

  useInterval(() => setCells(play([...cells])), isPlaying ? delay : null);

  return (
    <>
      <Controls
        clear={reset}
        seed={() =>
          setCells(
            generateCells(width, height, () => Math.random() > 1 - population)
          )
        }
        play={() => setIsPlaying(true)}
        pause={() => setIsPlaying(false)}
        delay={delay}
        isColor={isColor}
        setColor={setColor}
        setDelay={setDelay}
        isPlaying={isPlaying}
      />
      <Shapes cells={cells} isPlaying={isPlaying} setShape={setShape} />
      <Grid
        cells={cells}
        setCells={setCells}
        isPlaying={isPlaying}
        isColor={isColor}
        shape={shape}
      />
    </>
  );

  function generateCells(width, height = width, fn) {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, fn)
    );
  }

  function play(cells) {
    const newCells = generateCells(cells[0].length, cells.length, () => false);
    let k;
    for (k = 0; k < newCells.length; k++) {
      let l;
      for (l = 0; l < newCells[k].length; l++) {
        let aliveCount = 0,
          i;
        for (i = -1; i <= 1; i++) {
          let j;
          for (j = -1; j <= 1; j++) {
            // aliveCount += gboi(gboi(cells, k + i), l + j) ? 1 : 0;
            const yIndex = goi(cells, k + i);
            const xIndex = goi(cells[yIndex], l + j);
            aliveCount += cells[yIndex][xIndex] ? 1 : 0;
          }
        }
        newCells[k][l] = cells[k][l]
          ? aliveCount - 1 === 2 || aliveCount - 1 === 3
            ? true
            : false
          : aliveCount === 3
          ? true
          : false;
      }
    }
    return newCells;
  }

  function reset() {
    setCells(generateCells(width, height, () => false));
  }
}

export default Board;
