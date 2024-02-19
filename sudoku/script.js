let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  function createBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = board[i][j] === 0 ? '' : board[i][j];
            boardDiv.appendChild(cell);
        }
    }
  }
  
  function solveSudoku() {
    if (solve(board)) {
        createBoard();
    } else {
        alert("No solution exists.");
    }
  }
  
  function resetBoard() {
    board = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    createBoard();
  }
  
  function solve(board) {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true; // Puzzle solved
    }
    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solve(board)) {
                return true;
            }
            board[row][col] = 0; // Backtrack
        }
    }
    console.log(false);
    return false; // No solution found
  }
  
  function findEmptyCell(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
  }
  
  function isValid(board, row, col, num) {
    return (
        !usedInRow(board, row, num) &&
        !usedInCol(board, col, num) &&
        !usedInSubgrid(board, row - (row % 3), col - (col % 3), num)
    );
  }
  
  function usedInRow(board, row, num) {
    return board[row].includes(num);
  }
  
  function usedInCol(board, col, num) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === num) {
            return true;
        }
    }
    return false;
  }
  
  function usedInSubgrid(board, startRow, startCol, num) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row + startRow][col + startCol] === num) {
                return true;
            }
        }
    }
    return false;
  }
  
  // Create initial board
  createBoard();
  
  let delay = 50; // Delay in milliseconds between each step
  
  // Modify solveSudoku to call solveStepByStep
  function solveSudokustepbystep() {
      solveStepByStep(board);
  }
  
  // Modify solveStepByStep to introduce delay between steps
  async function solveStepByStep(board) {
      const emptyCell = findEmptyCell(board);
      if (!emptyCell) {
          createBoard();
          return true; // Puzzle solved
      }
      const [row, col] = emptyCell;
      for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
              board[row][col] = num;
              createBoard();
              await sleep(delay); // Introduce delay between steps
              if (await solveStepByStep(board)) {
                  return true;
              }
              board[row][col] = 0; // Backtrack
          }
      }
      return false; // No solution found
  }
  
  // Add sleep function
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  