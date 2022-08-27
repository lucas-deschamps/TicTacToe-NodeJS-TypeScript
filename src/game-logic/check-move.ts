import { adversaryPos } from './board';

import { BoardMark } from '../models/board';

export const checkPlayerMove = (gameGrid: string[][], row: number, column: number): void => {
  if (gameGrid[row][column] === BoardMark.Computer) {
    console.log('\nDon\'t try and cheat. :(\n');
    process.exit(1);
  } 
  
  else if (gameGrid[row][column] === BoardMark.Player)
    console.log(`\nSpot already marked at position (r: ${row + 1}, c: ${column + 1}). \n\nMove wasted!`);
};

export const checkComputerMove = (gameGrid: string[][]): number[] => {
  let [ adversaryRow, adversaryCol ] = adversaryPos(gameGrid.length);

  while (
    gameGrid[adversaryRow][adversaryCol] === BoardMark.Player 
    || gameGrid[adversaryRow][adversaryCol] === BoardMark.Computer
  ) [ adversaryRow, adversaryCol ] = adversaryPos(gameGrid.length);

  return [ adversaryRow, adversaryCol ];
};
