import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

enum BoardMark {
  Player = 'X',
  Computer = 'O'
}

const gameGrid: string[][] = Array.from(new Array(3), () => new Array(3).fill(''));

const adversaryPos = (): number[] => [Math.floor(Math.random() * gameGrid.length), Math.floor(Math.random() * gameGrid.length)];

rl.setPrompt('\nPlease choose your move\'s column (values 1-3).\n> ');

const gameIntro = `  TIC-TAC-TOE
     |   |
  _${gameGrid[0][0]} _+_${gameGrid[0][1]} _+_${gameGrid[0][2]} _
     |   |
  _${gameGrid[1][0]} _+_${gameGrid[1][1]} _+_${gameGrid[1][2]} _
   ${gameGrid[2][0]}  | ${gameGrid[2][1]}  | ${gameGrid[2][2]}
`;

console.log(gameIntro);

rl.prompt();

rl.on('line', (col: any) => {
  col = parseInt(col) - 1;
  
  if (![0, 1, 2].includes(col)) {
    console.log('Invalid option. Game over.\n');
    process.exit(1);
  }

  console.log('\nInput:', col);

  rl.question('\nPlease choose your move\'s row (values 1-3).\n> ', (row: any) => {
    row = parseInt(row) - 1;
    
    if (![0, 1, 2].includes(row)) {
      console.log('Invalid option. Game over.\n');
      process.exit(1);
    }
    
    gameGrid[col][row] = BoardMark.Player;

    console.log('\nMove completed.');

    let [ adversaryCol, adversaryRow ] = adversaryPos();

    while (
      gameGrid[adversaryCol][adversaryRow] === BoardMark.Player 
      || gameGrid[adversaryCol][adversaryRow] === BoardMark.Computer
    ) [ adversaryCol, adversaryRow ] = adversaryPos();
    
    gameGrid[adversaryCol][adversaryRow] = BoardMark.Computer 
     
    console.log('\nAdversary move completed.');

    console.log('\ngame grid:', gameGrid);
    console.log('\ngame:');
    console.log(`
        |   |
     _${gameGrid[0][0] || ' '}_+_${gameGrid[0][1] || ' '}_+_${gameGrid[0][2] || ' '}_
        |   |
     _${gameGrid[1][0] || ' '}_+_${gameGrid[1][1] || ' '}_+_${gameGrid[1][2] || ' '}_
      ${gameGrid[2][0] || ' '} | ${gameGrid[2][1] || ' '} | ${gameGrid[2][2] || ' '}
    `);
    
    rl.prompt();
  });
});

rl.on('close', () => {
  console.log('\n\nTerminating game.\n[GAME OVER]\n');
  process.exit(1);
});
