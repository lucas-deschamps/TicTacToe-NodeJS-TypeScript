import { BoardMark } from './index';

export const checkWinCondition = (gameGrid: string[][], mark: string): boolean => {
  if ( (
      gameGrid[0][0] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][2] === mark
    ) || (
      gameGrid[0][0] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][2] === mark
    ) || (
      gameGrid[0][0] === mark
      && gameGrid[1][1] === mark
      && gameGrid[2][2] === mark
    )
  ) {
      mark === BoardMark.Computer ? 
        console.log('The computer won. Wow.')
        : console.log('You win. Congratulations.');

      process.exit(0);
  }
  
  return false;
};
