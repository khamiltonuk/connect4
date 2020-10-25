import { createBoard, addPiece } from "./Game.js";
export const initialState = {
  GameState: "NewGame",
  playerOne: 21,
  playerTwo: 21,
  board: createBoard(7, 6),
};

export function gameReducer(state, action) {
  if (action.type === "PLAY_A_PIECE") {
    return {
      ...state,
      playerOne:
        action.payload.player === "X" ? state.playerOne - 1 : state.playerOne,
      playerTwo:
        action.payload.player === "O" ? state.playerTwo - 1 : state.playerTwo,
      board: addPiece(
        state.board,
        action.payload.player,
        action.payload.column
      ),
    };
  }

  return state;
}
