import { createBoard, addPiece } from "./Game";

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

  it("should return a board of 4 columns when 4 is passed into the function", () => {
    const board = createBoard(3, 5);

    const columnCount = board.every((row) => {
      return row.length === 5;
    });

    expect(columnCount).toBe(true);
  });
});
