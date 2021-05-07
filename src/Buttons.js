import React from 'react'

function Buttons({dispatch, index = 3}) {
    // return (
    //     <>
    //     {new Array(7).fill().map((cols, index) => {
          return (
            <button
              key={index}
              onClick={() =>
                dispatch({
                  type: "PLAY_A_PIECE",
                  payload: { player: "X", column: index },
                })
              }
            >
              Add piece to column {index}
            </button>
          );
    //     })}
    //     </>
    // )
}

export default Buttons