import React from "react";

// https://rossta.net/blog/connect-four-with-svg-pattern-masking.html

function Board({ rows = 4, columns = 5, gridSize = 300, padding = 40 }) {
  const circleRadius = (gridSize - padding) / 2;
  const boardWidth = columns * gridSize;
  const boardHeight = rows * gridSize;
  const middlePoint = gridSize / 2;
  return (
    <svg
      width={boardWidth}
      viewBox={`0 0 ${boardWidth} ${boardHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="cell-pattern"
          patternUnits="userSpaceOnUse"
          width={gridSize}
          height={gridSize}
        >
          <circle
            cx={middlePoint}
            cy={middlePoint}
            r={circleRadius}
            fill="black"
          ></circle>
        </pattern>
        <mask id="cell-mask">
          <rect width={boardWidth} height={boardHeight} fill="white"></rect>
          <rect
            width={boardWidth}
            height={boardHeight}
            fill="url(#cell-pattern)"
          ></rect>
        </mask>
      </defs>
      <svg x="0" y="0">
        <rect
          width={boardWidth}
          height={boardHeight}
          fill="cadetblue"
          mask="url(#cell-mask)"
        ></rect>
      </svg>
    </svg>
  );
}

export default Board;
