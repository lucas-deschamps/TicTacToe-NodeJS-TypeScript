import { BoardMark, adversaryPos } from './index';
export const checkPlayerMove = (gameGrid, row, column) => {
    if (gameGrid[row][column] === BoardMark.Computer) {
        console.log('\nDon\'t try and cheat. :(\n');
        process.exit(1);
    }
    else if (gameGrid[row][column] === BoardMark.Player) {
        console.log(`\nSpot already marked at position (r: ${row + 1}, c: ${column + 1}). \n\nMove wasted!`);
    }
};
export const checkComputerMove = (gameGrid) => {
    let [adversaryRow, adversaryCol] = adversaryPos();
    while (gameGrid[adversaryRow][adversaryCol] === BoardMark.Player
        || gameGrid[adversaryRow][adversaryCol] === BoardMark.Computer)
        [adversaryRow, adversaryCol] = adversaryPos();
    return [adversaryRow, adversaryCol];
};
