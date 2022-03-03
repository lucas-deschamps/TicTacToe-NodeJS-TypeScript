import { BoardMark } from './index';

export const checkWinCondition = (gameGrid: string[][], mark: BoardMark): void => {
  if (checkHorizontalWin(gameGrid, mark) || checkVerticalWin(gameGrid, mark) || checkDiagonalWin(gameGrid, mark)) {
    console.log('\nRESULT:');

    console.log(`
         |   |
      _${gameGrid[0][0] || ' '}_+_${gameGrid[0][1] || ' '}_+_${gameGrid[0][2] || ' '}_
         |   |
      _${gameGrid[1][0] || ' '}_+_${gameGrid[1][1] || ' '}_+_${gameGrid[1][2] || ' '}_
       ${gameGrid[2][0] || ' '} | ${gameGrid[2][1] || ' '} | ${gameGrid[2][2] || ' '}
    `);

    mark === BoardMark.Computer ? 
      console.log('\nThe computer won. Wow.\n')
      : console.log('\nYou win. Congratulations.\n');

    process.exit(0);
  }
};

function checkHorizontalWin(gameGrid: string[][], mark: BoardMark): boolean {
  for (let row = 0; row < gameGrid.length; ++row) {
    if (
      gameGrid[row][0] === mark
      && gameGrid[row][1] === mark
      && gameGrid[row][2] === mark
    ) return true;
  }

  return false;
};

function checkVerticalWin(gameGrid: string[][], mark: BoardMark): boolean {
  for (let col = 0; col < gameGrid.length; ++col) {
    if (
      gameGrid[0][col] === mark
      && gameGrid[1][col] === mark
      && gameGrid[2][col] === mark
    ) return true;
  }

  return false;
};

function checkDiagonalWin(gameGrid: string[][], mark: BoardMark): boolean {
  if ((
    gameGrid[0][0] === mark
    && gameGrid[1][1] === mark
    && gameGrid[2][2] === mark
  ) || (
    gameGrid[0][2] === mark
    && gameGrid[1][1] === mark
    && gameGrid[2][0] === mark
  )) return true;

  return false;
};
