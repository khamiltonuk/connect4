import React, { useReducer, createContext } from "react";
import "./App.css";
import Board from "./Board";
import { gameReducer, initialState } from "./GameReducer";
import styled from "styled-components";
import Buttons from "./Buttons";
import Result from "./Result";

const Piece = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: ${(props) => (props.player === 1 ? "red" : "yellow")};
  border-radius: 50%;
  border: 1px solid #000;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
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

// function Pieces({ pieces, player }) {
//   const playerPieces = new Array(pieces).fill();
//   return playerPieces.map(function (piece, i) {
//     return <Piece key={`${player}-${i}`} player={player} index={i}></Piece>;
//   });
// }

const BoardContext = createContext();

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  console.log(state.board);
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="right-tray">
          <Piece player={1} top={10} right={10} />
        </div>
        <Buttons dispatch={dispatch} />

        <Board rows={6} columns={7} gridSize={150} />
        <Result board={state.board} />
        <div className="left-tray">
          <Piece player={2} top={300} right={10} />
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default App;
