import readline from 'readline';

import { BoardMark } from './models/board';
import { ITicTacToe } from './models/game';

import { gameGridInit } from './game-logic/board';
import { validateInput } from './game-logic/check-input';
import { checkWinCondition as checkWin } from './game-logic/check-win';
import { checkPlayerMove, checkComputerMove } from './game-logic/check-move';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gameIntro = `  TIC-TAC-TOE
     |   |
  _ _+_ _+_ _
     |   |
  _ _+_ _+_ _
     |   | 
`;

class TicTacToe implements ITicTacToe {
  private readonly gameGrid: string[][];

  constructor(boardSize: number) {
    console.log(gameIntro);

    this.gameGrid = gameGridInit(boardSize);
    
    rl.setPrompt('\nPlease choose your move\'s row (values 1 to 3).\n> ');
    
    rl.on('close', () => {
      console.log('\n\n== Terminating game ==\n\n[GAME OVER]\n');
      process.exit(1);
    });
  }

  public start() {
    rl.prompt();

    rl.on('line', (row: number) => {
      row -= 1;
      
      validateInput(row);

      rl.question('\nPlease choose your move\'s column (values 1 to 3).\n> ', (col: string | number) => {
        col = parseInt(col as string) - 1;
        
        validateInput(col);

        // Player logic
        checkPlayerMove(this.gameGrid, +row, +col);

        this.gameGrid[row][col] = BoardMark.Player;

        console.log('\nMove completed.');

        checkWin(this.gameGrid, BoardMark.Player);
        
        // Adversary logic
        const [ adversaryRow, adversaryCol ] = checkComputerMove(this.gameGrid);
        
        this.gameGrid[adversaryRow][adversaryCol] = BoardMark.Computer;
        
        console.log('\nAdversary move completed.');

        checkWin(this.gameGrid, BoardMark.Computer);
        
        // Board logic
        console.log('\nGAME:');

        console.log(`
             |   |
          _${this.gameGrid[0][0] || ' '}_+_${this.gameGrid[0][1] || ' '}_+_${this.gameGrid[0][2] || ' '}_
             |   |
          _${this.gameGrid[1][0] || ' '}_+_${this.gameGrid[1][1] || ' '}_+_${this.gameGrid[1][2] || ' '}_
           ${this.gameGrid[2][0] || ' '} | ${this.gameGrid[2][1] || ' '} | ${this.gameGrid[2][2] || ' '}
        `);
        
        rl.prompt();
      });
    });
  }
}

const game = new TicTacToe(3);

game.start();
