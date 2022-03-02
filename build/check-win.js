import { BoardMark } from './index';
export const checkWinCondition = (gameGrid, mark) => {
    if ((gameGrid[0][0] === mark
        && gameGrid[1][1] === mark
        && gameGrid[2][2] === mark) || (gameGrid[0][0] === mark
        && gameGrid[0][1] === mark
        && gameGrid[0][2] === mark) || (gameGrid[0][0] === mark
        && gameGrid[1][0] === mark
        && gameGrid[2][0] === mark) || (gameGrid[1][0] === mark
        && gameGrid[1][1] === mark
        && gameGrid[1][2] === mark) || (gameGrid[0][1] === mark
        && gameGrid[1][1] === mark
        && gameGrid[2][1] === mark) || (gameGrid[2][0] === mark
        && gameGrid[2][1] === mark
        && gameGrid[2][2] === mark) || (gameGrid[0][2] === mark
        && gameGrid[1][2] === mark
        && gameGrid[2][2] === mark) || (gameGrid[0][2] === mark
        && gameGrid[1][1] === mark
        && gameGrid[2][0] === mark)) {
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
