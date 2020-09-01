export function createBoard(rows, cols) {
  const matrix = new Array(rows).fill().map(() => new Array(cols).fill("."));
  return matrix;
}

export function addPiece(board, piece, position) {
  let bail = false;
  const newBoard = board
    .reverse()
    .map((row) => {
      if (bail) {
        return row;
      }

      if (row[position] === ".") {
        row.splice(position, 1, piece);
        bail = true;
        return row;
      }
      return row;
    })
    .reverse();
  return newBoard;
}
