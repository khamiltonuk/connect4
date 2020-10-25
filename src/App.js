import React, { useReducer, createContext, useContext } from "react";
import "./App.css";

const initialState = {
  knightPosition: [0, 0],
};

function boardReducer(state, action) {
  if (action.type === "UPDATE_KNIGHT_POSITION") {
    return {
      ...state,
      knightPosition: action.payload,
    };
  }

  return state;
}

const BoardContext = createContext();
function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      <div className="App"></div>
    </BoardContext.Provider>
  );
}

export default App;
