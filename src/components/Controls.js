import React from "react";

function Controls({
  seed,
  clear,
  play,
  pause,
  isPlaying,
  delay,
  setDelay,
  isColor,
  setColor
}) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          value={isColor}
          onChange={() => setColor(!isColor)}
        />
        Color
      </label>
      <button onClick={seed} disabled={isPlaying}>
        Seed
      </button>
      <button onClick={clear} disabled={isPlaying}>
        Clear
      </button>
      <button onClick={isPlaying ? pause : play}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min="50"
        max="1000"
        value={1000 - delay}
        onChange={e => setDelay(1000 - parseInt(e.target.value, 10))}
      />
    </>
  );
}

export default Controls;
