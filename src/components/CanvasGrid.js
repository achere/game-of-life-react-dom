import React, { useEffect } from "react";

function CanvasGrid({ cells }) {
  const canvasRef = React.createRef();
  const size = 15;
  const colorOn = "green";
  const colorOff = "white";
  const width = cells[0].length;
  const height = cells.length;
  console.log("rr");
  useEffect(() => {
    //console.log("eff");
    const ctx = canvasRef.current.getContext("2d");

    let i;
    for (i = 0; i < height; i++) {
      let j;
      for (j = 0; j < width; j++) {
        if (cells[i][j]) ctx.fillStyle = colorOn;
        else ctx.fillStyle = colorOff;
        ctx.fillRect(j * size, i * size, size, size);
      }
    }
    drawGrid(ctx, width * size, height * size, size);
  });

  return <canvas ref={canvasRef} width={width * size} height={height * size} />;
}

function drawGrid(ctx, width, height, space) {
  let x;
  for (x = 0; x <= width; x += space) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }
  let y;
  for (y = 0; y <= height; y += space) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.strokeStyle = "grey";
  ctx.stroke();
}

export default CanvasGrid;
