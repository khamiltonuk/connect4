export function createBoard(rows, cols) {
  const matrix = new Array(rows).fill().map(() => new Array(cols).fill("."));
  return matrix;
}

export function addPiece(board, piece, position) {
  let bail = false;
  return [...board]
    .reverse()
    .map((row) => {
      if (bail) {
        return row;
      }

      if (row[position] === ".") {
        bail = true;
        return [...row.slice(0, position), piece, ...row.slice(position + 1)];
      }
      return row;
    })
    .reverse();
}

function findVerticalWinner(currentSlot, index, arr, depth, boardWidth) {
  let result = [];
  for (let i = 1; i < depth; i++) {
    if (arr[index + boardWidth * i] === currentSlot) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((outcome) => outcome);
}

function findDiagonalDescendingWinner(
  currentSlot,
  index,
  arr,

  depth,
  boardWidth
) {
  let result = [];
  for (let i = 1; i < depth; i++) {
    if (arr[index + i + boardWidth * i] === currentSlot) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((outcome) => outcome);
}

function findDiagonalAscendingWinner(
  currentSlot,
  index,
  arr,
  depth,
  boardWidth
) {
  let result = [];
  for (let i = 1; i < depth; i++) {
    if (arr[index + i - boardWidth * i] === currentSlot) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((outcome) => outcome);
}

function findHoritontalWinner(currentSlot, index, arr, depth) {
  let result = [];
  for (let i = 1; i < depth; i++) {
    if (arr[index + i] === currentSlot) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((outcome) => outcome);
}

export function findWinner(board, depth = 4) {
  const boardWidth = board[0].length;

  const hasWinner = board.flat().find((slot, index, arr) => {
    if (slot === ".") {
      return false;
    }

    const verticalWin = findVerticalWinner(slot, index, arr, depth, boardWidth);
    const horizontalWin = findHoritontalWinner(slot, index, arr, depth);
    const diagonalAscendingWin = findDiagonalAscendingWinner(
      slot,
      index,
      arr,
      depth,
      boardWidth
    );
    const diagonalDescendingWin = findDiagonalDescendingWinner(
      slot,
      index,
      arr,
      depth,
      boardWidth
    );

    return [
      verticalWin,
      horizontalWin,
      diagonalAscendingWin,
      diagonalDescendingWin,
    ].some((outcome) => outcome);
  });

  const isTie = noMoreSpace(board);

  return hasWinner || isTie;
}

export function noMoreSpace(board) {
  return board.flat().every((space) => space === "X" || space === "O");
}

export function canPlayPiece(board, position) {
  return board[0][position] === ".";
}
