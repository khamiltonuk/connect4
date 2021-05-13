import React from "react";

function Buttons({ dispatch, index = 3, turn }) {
  return (
    <>
      {new Array(7).fill().map((cols, index) => {
        return (
          <button
            key={index}
            onClick={() =>
              dispatch({
                type: "PLAY_A_PIECE",
                payload: { player: turn, column: index },
              })
            }
          >
            Add piece to column {index}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;
