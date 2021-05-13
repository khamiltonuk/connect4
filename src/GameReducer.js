import { createBoard, addPiece, findWinner } from "./Game.js";

export const initialState = {
  GameState: "NewGame",
  playerOne: 21, // how many pieces
  playerTwo: 21,
  whosTurn: "X",
  board: createBoard(6, 7),
};

export function gameReducer(state, action) {
  switch (action.type) {
    case "PLAY_A_PIECE": {
      const newBoard = addPiece(
        state.board,
        action.payload.player,
        action.payload.column
      );
      return {
        ...state,
        GameState: findWinner(newBoard) ? "GameOver" : "InPlay",
        playerOne:
          action.payload.player === "X" ? state.playerOne - 1 : state.playerOne,
        playerTwo:
          action.payload.player === "O" ? state.playerTwo - 1 : state.playerTwo,
        whosTurn: state.whosTurn === "X" ? "O" : "X",
        board: newBoard,
      };
    }
    default:
      return state;
  }
}
