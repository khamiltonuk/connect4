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

    expect(updateState.board).toEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "X"],
    ]);
  });
  test("Should decrement player one count if X takes turn", () => {
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

    //expect
    expect(updateState).toHaveProperty("playerOne", 20);
  });
  test("Should decrement player two count if O takes turn", () => {
    const initialState = {
      GameState: "InPlay",
      playerOne: 21,
      playerTwo: 21,
      whosTurn: "O",
      board: createBoard(3, 3),
    };

    const action = {
      type: "PLAY_A_PIECE",
      payload: {
        column: 2,
        player: "O",
      },
    };

    //act
    const updateState = gameReducer(initialState, action);

    //expect
    expect(updateState).toHaveProperty("playerTwo", 20);
  });
  test("Should switch Player if X takes turn", () => {
    const initialState = {
      GameState: "InPlay",
      playerOne: 21,
      playerTwo: 21,
      whosTurn: "X",
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

    //expect
    expect(updateState).toHaveProperty("whosTurn", "O");
  });
  test("Should switch Player if O takes turn", () => {
    const initialState = {
      GameState: "InPlay",
      playerOne: 21,
      playerTwo: 21,
      whosTurn: "O",
      board: createBoard(3, 3),
    };

    const action = {
      type: "PLAY_A_PIECE",
      payload: {
        column: 2,
        player: "O",
      },
    };

    //act
    const updateState = gameReducer(initialState, action);

    //expect
    expect(updateState).toHaveProperty("whosTurn", "X");
  });
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
  test("Should end game if no more slots and no winner", () => {
    //setup
    const initialState = {
      GameState: "InPlay",
      playerOne: 18,
      playerTwo: 18,
      board: [
        ["X", "O", "X", "."],
        ["O", "X", "O", "X"],
        ["O", "O", "X", "O"],
        ["X", "X", "X", "O"],
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

  describe("Full column", () => {
    test("Should not change board if column is full", () => {
      //setup
      const initialState = {
        GameState: "InPlay",
        playerOne: 18,
        playerTwo: 18,
        board: [
          ["X", ".", "."],
          ["X", ".", "."],
          ["X", ".", "."],
        ],
      };

      const action = {
        type: "PLAY_A_PIECE",
        payload: {
          column: 0,
          player: "X",
        },
      };

      //act
      const updateState = gameReducer(initialState, action);

      // expect
      expect(updateState.board).toEqual([
        ["X", ".", "."],
        ["X", ".", "."],
        ["X", ".", "."],
      ]);
    });

    test("Should not decrement playerOne count if column is full when playing piece", () => {
      //setup
      const initialState = {
        GameState: "InPlay",
        playerOne: 18,
        playerTwo: 18,
        whosTurn: "X",
        board: [
          ["X", ".", "."],
          ["X", ".", "."],
          ["X", ".", "."],
        ],
      };

      const action = {
        type: "PLAY_A_PIECE",
        payload: {
          column: 0,
          player: "X",
        },
      };

      //act
      const updateState = gameReducer(initialState, action);

      //expect
      expect(updateState).toHaveProperty("playerOne", 18);
    });

    test("Should not decrement playerOne count if column is full when playing piece", () => {
      //setup
      const initialState = {
        GameState: "InPlay",
        playerOne: 18,
        playerTwo: 18,
        whosTurn: "O",
        board: [
          ["X", ".", "."],
          ["X", ".", "."],
          ["X", ".", "."],
        ],
      };

      const action = {
        type: "PLAY_A_PIECE",
        payload: {
          column: 0,
          player: "O",
        },
      };

      //act
      const updateState = gameReducer(initialState, action);

      //expect
      expect(updateState).toHaveProperty("playerTwo", 18);
    });
  });
});
