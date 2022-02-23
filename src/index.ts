import readline from 'readline';

import { checkWinCondition as checkWin } from './check-win';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export enum BoardMark {
  Player = 'X',
  Computer = 'O'
}

const gameGrid: string[][] = Array.from(Array(3), () => new Array(3).fill(''));

const adversaryPos = (): number[] => [Math.floor(Math.random() * gameGrid.length), Math.floor(Math.random() * gameGrid.length)];

rl.setPrompt('\nPlease choose your move\'s row (values 1 to 3).\n> ');

const gameIntro = `  TIC-TAC-TOE
     |   |
  _${gameGrid[0][0]} _+_${gameGrid[0][1]} _+_${gameGrid[0][2]} _
     |   |
  _${gameGrid[1][0]} _+_${gameGrid[1][1]} _+_${gameGrid[1][2]} _
   ${gameGrid[2][0]}  | ${gameGrid[2][1]}  | ${gameGrid[2][2]}
`;

console.log(gameIntro);

rl.prompt();

rl.on('line', (row: string | number) => {
  row = parseInt(row as string) - 1;
  
  if (![0, 1, 2].includes(row)) {
    console.log('Invalid option. Game over.\n');
    process.exit(1);
  }

  rl.question('\nPlease choose your move\'s column (values 1 to 3).\n> ', (col: string | number) => {
    col = parseInt(col as string) - 1;
    
    if (![0, 1, 2].includes(col)) {
      console.log('Invalid option. Game over.\n');
      process.exit(1);
    }
    
    gameGrid[row][col] = BoardMark.Player;

    console.log('\nMove completed.');

    let [ adversaryRow, adversaryCol ] = adversaryPos();

    while (
      gameGrid[adversaryRow][adversaryCol] === BoardMark.Player 
      || gameGrid[adversaryRow][adversaryCol] === BoardMark.Computer
    ) [ adversaryRow, adversaryCol ] = adversaryPos();
    
    gameGrid[adversaryRow][adversaryCol] = BoardMark.Computer;
     
    console.log('\nAdversary move completed.');
    
    console.log('\nGAME:');

    console.log(`
         |   |
      _${gameGrid[0][0] || ' '}_+_${gameGrid[0][1] || ' '}_+_${gameGrid[0][2] || ' '}_
         |   |
      _${gameGrid[1][0] || ' '}_+_${gameGrid[1][1] || ' '}_+_${gameGrid[1][2] || ' '}_
       ${gameGrid[2][0] || ' '} | ${gameGrid[2][1] || ' '} | ${gameGrid[2][2] || ' '}
    `);

    checkWin(gameGrid, BoardMark.Player);
    checkWin(gameGrid, BoardMark.Computer);
    
    rl.prompt();
  });
});

rl.on('close', () => {
  console.log('\n\nTerminating game.\n[GAME OVER]\n');
  process.exit(1);
});
