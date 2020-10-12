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

function findVerticalWinner(currentSlot, index, arr, boardWidth) {
  if (arr[index + boardWidth] === currentSlot) {
    if (arr[index + boardWidth * 2] === currentSlot) {
      if (arr[index + boardWidth * 3] === currentSlot) {
        return true;
      }
    }
  }
}

function findDiagonalDescendingWinner(currentSlot, index, arr, boardWidth) {
  if (arr[index + 1 + boardWidth] === currentSlot) {
    if (arr[index + 2 + boardWidth * 2] === currentSlot) {
      if (arr[index + 3 + boardWidth * 3] === currentSlot) {
        return true;
      }
    }
  }
}

function findDiagonalAscendingWinner(currentSlot, index, arr, boardWidth) {
  if (arr[index + 1 - boardWidth] === currentSlot) {
    if (arr[index + 2 - boardWidth * 2] === currentSlot) {
      if (arr[index + 3 - boardWidth * 3] === currentSlot) {
        return true;
      }
    }
  }
}

function findHoritontalWinner(currentSlot, index, arr) {
  if (arr[index + 1] === currentSlot) {
    if (arr[index + 2] === currentSlot) {
      if (arr[index + 3] === currentSlot) {
        return true;
      }
    }
  }
}

export function findWinner(board) {
  const boardWidth = board[0].length;

  const result = board.flat().find((slot, index, arr) => {
    if (slot === ".") {
      return false;
    }

    const verticalWin = findVerticalWinner(slot, index, arr, boardWidth);
    const horizontalWin = findHoritontalWinner(slot, index, arr);
    const diagonalAscendingWin = findDiagonalAscendingWinner(
      slot,
      index,
      arr,
      boardWidth
    );
    const diagonalDescendingWin = findDiagonalDescendingWinner(
      slot,
      index,
      arr,
      boardWidth
    );

    return [
      verticalWin,
      horizontalWin,
      diagonalAscendingWin,
      diagonalDescendingWin,
    ].some((outcome) => outcome);
  });

  return result;
}

export function noMoreSpace(board) {
  return board.flat().every((space) => space === "X" || space === "O");
}
