import React, { useReducer, createContext, useContext } from "react";
import "./App.css";
import Board from "./Board";
import { gameReducer, initialState } from "./GameReducer";
import styled from "styled-components";

const Piece = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  transform: translateY(
    ${(props) => {
      console.log(props.index * 40);
      return props.index * 4 + "px";
    }}
  );
  background: ${(props) => (props.player === 1 ? "red" : "yellow")};
  border-radius: 50%;
  border: 1px solid #000;
`;

// const initialState = {
//   knightPosition: [0, 0],
// };

// function boardReducer(state, action) {
//   if (action.type === "UPDATE_KNIGHT_POSITION") {
//     return {
//       ...state,
//       knightPosition: action.payload,
//     };
//   }

//   return state;
// }

function Pieces({ pieces, player }) {
  const playerPieces = new Array(pieces).fill();
  return playerPieces.map(function (piece, i) {
    return <Piece key={`${player}-${i}`} player={player} index={i}></Piece>;
  });
}

const BoardContext = createContext();

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="right-tray">
          <Pieces pieces={state.playerOne} player={1} />
        </div>
        <Board rows={6} columns={7} gridSize={150} />
        <div className="left-tray">
          <Pieces pieces={state.playerTwo} player={2} />
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default App;
