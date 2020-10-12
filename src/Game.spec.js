import { createBoard, addPiece, findWinner, noMoreSpace } from "./Game";

describe("addPiece", () => {
  it("should add a piece to an empty board in the right place", () => {
    const board = createBoard(3, 3);

    const newState = addPiece(board, "X", 2);

    expect(newState).toEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "X"],
    ]);
  });

  it("should add a piece to a board with a piece in the right place", () => {
    const board = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "X"],
    ];

    const newState = addPiece(board, "X", 2);

    expect(newState).toEqual([
      [".", ".", "."],
      [".", ".", "X"],
      [".", ".", "X"],
    ]);
  });

  it("should add a piece to a board with a piece in the right place", () => {
    const board = [
      [".", ".", "X"],
      [".", ".", "X"],
      [".", ".", "X"],
    ];

    const newState = addPiece(board, "X", 2);

    expect(newState).toEqual([
      [".", ".", "X"],
      [".", ".", "X"],
      [".", ".", "X"],
    ]);
  });

  it("should add a piece to a board with a piece from the other team in the right place", () => {
    const board = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "O"],
    ];

    const newState = addPiece(board, "X", 2);

    expect(newState).toEqual([
      [".", ".", "."],
      [".", ".", "X"],
      [".", ".", "O"],
    ]);
  });
});

describe("createBoard", () => {
  it("should return an array", () => {
    const board = createBoard();
    expect(Array.isArray(board)).toBe(true);
  });

  it("should return a board of 3 rows when 3 is passed into the function", () => {
    const board = createBoard(3);
    expect(board).toHaveLength(3);
  });

  it("should return an empty board", () => {
    const board = createBoard(3);

    const allDots = board.every((row) => row.every((item) => item === "."));
    expect(allDots).toBe(true);
  });

  it("should return a board of 5 columns when 5 is passed into the function", () => {
    const board = createBoard(3, 5);

    const columnCount = board.every((row) => {
      return row.length === 5;
    });

    expect(columnCount).toBe(true);
  });
});

describe("findWinner", () => {
  describe("X", () => {
    test("should be able to find a diagonal descending row of 4", () => {
      const board = [
        ["X", "O", ".", "."],
        [".", "X", "O", "."],
        [".", ".", "X", "O"],
        [".", ".", ".", "X"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("X");
    });

    test("should be able to find a diagonal ascending row of 4", () => {
      const board = [
        ["O", "X", ".", "X"],
        [".", "X", "X", "."],
        [".", "X", "X", "O"],
        ["X", ".", ".", "X"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("X");
    });

    test("should be able to find a vertical row of 4", () => {
      const board = [
        [".", ".", "X", "."],
        [".", "X", "X", "."],
        [".", ".", "X", "."],
        [".", ".", "X", "."],
      ];

      const result = findWinner(board);

      expect(result).toEqual("X");
    });

    test("should be able to find a horizontal row of 4", () => {
      const board = [
        ["O", "X", "X", "X"],
        [".", "X", "O", "O"],
        [".", ".", "X", "X"],
        ["X", "X", "X", "X"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("X");
    });
  });

  describe("O", () => {
    test("should be able to find a diagonal descending row of 4", () => {
      const board = [
        ["O", "O", ".", "."],
        [".", "O", "O", "."],
        [".", ".", "O", "O"],
        [".", ".", ".", "O"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("O");
    });

    test("should be able to find a diagonal ascending row of 4", () => {
      const board = [
        ["O", "X", ".", "O"],
        [".", "X", "O", "."],
        [".", "O", "X", "O"],
        ["O", ".", ".", "X"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("O");
    });

    test("should be able to find a vertical row of 4", () => {
      const board = [
        [".", ".", "O", "."],
        [".", "O", "O", "."],
        [".", ".", "O", "."],
        [".", ".", "O", "."],
      ];

      const result = findWinner(board);

      expect(result).toEqual("O");
    });

    test("should be able to find a vertical row of 5", () => {
      const board = [
        [".", ".", "O", "."],
        [".", "O", "O", "."],
        [".", ".", "O", "."],
        [".", ".", "O", "."],
        [".", ".", "O", "."],
      ];

      const result = findWinner(board, 5);

      expect(result).toEqual("O");
    });

    test("should be able to find a horizontal row of 4", () => {
      const board = [
        ["O", "X", "O", "O"],
        [".", "O", "X", "O"],
        [".", ".", "O", "X"],
        ["O", "O", "O", "O"],
      ];

      const result = findWinner(board);

      expect(result).toEqual("O");
    });
  });

  test("should return undefined if no winner", () => {
    const board = [
      [".", ".", "X"],
      [".", "X", "O"],
      [".", "O", "X"],
      [".", "X", "O"],
    ];

    const result = findWinner(board);

    expect(result).toEqual(undefined);
  });
});

describe("noMoreSpace", () => {
  test("should return true if the board is full", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ];

    const newState = noMoreSpace(board);

    expect(newState).toEqual(true);
  });

  test("should return false if the board is not full", () => {
    const board = [
      ["X", "O", "."],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ];

    const newState = noMoreSpace(board);

    expect(newState).toEqual(false);
  });
});

describe("createGame", () => {
  const game = {
    depth: 4,
    board: createBoard(7, 6),
    gameState: "INIT",
    chips: 7 * 3,
    whosTurn: "X",
  };
});
