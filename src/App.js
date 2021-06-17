import React, { useReducer, createContext } from "react";
import "./App.css";
//import Board from "./Board";
import { gameReducer, initialState } from "./GameReducer";
import Hotspots from "./Hotspots";
import Result from "./Result";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Piece from "./Piece";

const BoardContext = createContext();

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <div className="right-tray">
            {/* <Piece player={1} top={10} right={10} /> */}
          </div>
          <Piece dispatch={dispatch} turn={state.whosTurn} />
          <Hotspots dispatch={dispatch} turn={state.whosTurn} />
          <p>{state.GameState}</p>
          {/* <Board rows={6} columns={7} gridSize={150} /> */}
          <Result board={state.board} />
          <p>It is {state.whosTurn}'s turn</p>
          <div className="left-tray">
            {/* <Piece player={2} top={300} right={10} /> */}
          </div>
        </div>
      </DndProvider>
    </BoardContext.Provider>
  );
}

export default App;
