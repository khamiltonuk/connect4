import { gameReducer } from "./GameReducer";
import { createBoard } from "./Game.js";

describe("gameReducer", () => {
  test("should play a piece in the right place", () => {
    const initialState = {
      GameState: "InPlay",
      playerOne: 21,
      playerTwo: 21,
      board: createBoard(3, 3),
    };

    const action = {
      type: "PLAY_A_PIECE",
      payload: {
        column: 2,
        player: "X",
      },
    };

    //act
    const updateState = gameReducer(initialState, action);

    // expect
    expect(updateState).toHaveProperty("GameState", "InPlay");
    expect(updateState).toHaveProperty("playerOne", 20);
    expect(updateState).toHaveProperty("playerTwo", 21);

    expect(updateState.board).toEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "X"],
    ]);
  });
  test.todo("Should decrement player one count if X takes turn");
  test.todo("Should decrement player two count if O takes turn");
  test.todo("Should switch Player if X takes turn");
  test.todo("Should switch Player if O takes turn");
  test("Should end game if a winner if founder after a player plays a piece", () => {
    //setup
    const initialState = {
      GameState: "InPlay",
      playerOne: 18,
      playerTwo: 18,
      board: [
        [".", ".", ".", "."],
        ["O", ".", ".", "."],
        ["O", "O", ".", "."],
        ["X", "X", "X", "."],
      ],
    };

    const action = {
      type: "PLAY_A_PIECE",
      payload: {
        column: 3,
        player: "X",
      },
    };

    //act
    const updateState = gameReducer(initialState, action);

    // expect
    expect(updateState).toHaveProperty("GameState", "GameOver");
  });
});
