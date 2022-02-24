import { BoardMark } from './index';

export const checkWinCondition = (gameGrid: string[][], mark: string): void => {
  if ( (
      gameGrid[0][0] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][2] === mark
    ) || (
      gameGrid[0][0] === mark
      && gameGrid[0][1] === mark
      && gameGrid[0][2] === mark
    ) || (
      gameGrid[0][0] === mark
      && gameGrid[1][0] === mark
      && gameGrid[2][0] === mark
    ) || (
      gameGrid[1][0] === mark
      && gameGrid[1][1] === mark
      && gameGrid[1][2] === mark
    ) || (
      gameGrid[0][1] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][1] === mark
    ) || (
      gameGrid[2][0] === mark
      && gameGrid[2][1] === mark
      && gameGrid[2][2] === mark
    ) || (
      gameGrid[0][2] === mark
      && gameGrid[1][2] === mark
      && gameGrid[2][2] === mark
    ) || (
      gameGrid[0][2] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][0] === mark
    )
  ) {
      mark === BoardMark.Computer ? 
        console.log('The computer won. Wow.\n')
        : console.log('You win. Congratulations.\n');

      process.exit(0);
  }
};