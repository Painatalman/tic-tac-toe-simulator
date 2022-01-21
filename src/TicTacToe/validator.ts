import { Board, ITicTacToeValidator, ValidatorMethodOptions } from "./types";

interface Options {
  characterPlayer1: string;
  characterPlayer2: string;
  characterEmpty: string;
}



export default class TicTacToeValidator implements ITicTacToeValidator {
  charPlayer1: string;
  charPlayer2: string;
  charEmpty: string;

  constructor({
   characterPlayer1,
   characterPlayer2,
   characterEmpty
  }:Options) {
    this.charPlayer1 = characterPlayer1 
    this.charPlayer2 = characterPlayer2 
    this.charEmpty = characterEmpty 
  }

  private getPlayerCharacter(isPlayerOne: boolean): string {
    return isPlayerOne ? this.charPlayer1 : this.charPlayer2;
  }

  private hasWonByLines({board, isPlayer1}:ValidatorMethodOptions) {
    const character = this.getPlayerCharacter(isPlayer1);

    for (let i = 0; i < 3; i += 1) {
      if (
        board[i][0] === character &&
        board[i][1] === character &&
        board[i][2] === character
      )
        return true;
    }
    return false;
  }

  private hasWonByColumns({board, isPlayer1}:ValidatorMethodOptions) {
    const character = this.getPlayerCharacter(isPlayer1);

    for (let i = 0; i < 3; i += 1) {
      if (
        board[0][i] === character &&
        board[1][i] === character &&
        board[2][i] === character
      )
        return true;
    }
    return false;
  }

  private hasWonByDiagonals({board, isPlayer1}:ValidatorMethodOptions) {
    const character = this.getPlayerCharacter(isPlayer1);

    for (let i = 0; i < 3; i += 1) {
      if (
        (board[0][0] === character &&
          board[1][1] === character &&
          board[2][2] === character) ||
        (board[0][2] === character &&
          board[1][1] === character &&
          board[2][0] === character)
      )
        return true;
    }
    return false;
  }

  hasPlayerWon({board, isPlayer1}: ValidatorMethodOptions) {
    return (
      this.hasWonByLines({board, isPlayer1}) ||
      this.hasWonByColumns({board, isPlayer1}) ||
      this.hasWonByDiagonals({board, isPlayer1})
    );
  }

  hasEmptySpaces(board: Board) {
    for (let line = 0; line < 3; line += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (board[line][col] === this.charEmpty) return true;
      }
    }

    return false;
  }
}
