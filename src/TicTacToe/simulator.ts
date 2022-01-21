import getRandomIntUpTo from "../utils/getRandomIntUpTo";
import {
  Board,
  BoardPlay,
  TicTacToeOptions,
  TicTacToeResults,
  Outcome,
} from "./types";
import TicTacToeValidator from "./validator";

export default class TicTacToe {
  board: Board;
  plays: BoardPlay[];
  player1Char: string;
  player2Char: string;
  emptyChar: string;
  validator: TicTacToeValidator;

  constructor(options?: TicTacToeOptions) {
    this.player1Char = options?.player1Char || "x";
    this.player2Char = options?.player2Char || "o";
    this.emptyChar = options?.emptyChar || "_";
    this.board = [
      [this.emptyChar, this.emptyChar, this.emptyChar],
      [this.emptyChar, this.emptyChar, this.emptyChar],
      [this.emptyChar, this.emptyChar, this.emptyChar],
    ];
    this.plays = [];
    this.validator = new TicTacToeValidator({
      characterEmpty: this.emptyChar,
      characterPlayer1: this.player1Char,
      characterPlayer2: this.player2Char,
    });
  }

  private getPlayerCharacter(isPlayerOne: boolean): string {
    return isPlayerOne ? this.player1Char : this.player2Char;
  }

  private getValidPosition() {
    let line = getRandomIntUpTo(3);
    let col = getRandomIntUpTo(3);

    while (this.board[line][col] !== this.emptyChar) {
      line = getRandomIntUpTo(3);
      col = getRandomIntUpTo(3);
    }

    return [line, col];
  }

  private makePlay(isPlayerOne: boolean) {
    const character = this.getPlayerCharacter(isPlayerOne);
    const [line, col] = this.getValidPosition();

    this.board[line][col] = character;
    this.registerPlay();
  }

  private registerPlay() {
    const boardCopy: Board = [
      [...this.board[0]],
      [...this.board[1]],
      [...this.board[2]],
    ];

    this.plays.push(boardCopy);
  }

  private hasGameEnded() {
    const { validator, board } = this;

    return (
      validator.hasPlayerWon({ isPlayer1: true, board }) ||
      validator.hasPlayerWon({ isPlayer1: false, board }) ||
      !validator.hasEmptySpaces(board)
    );
  }

  private getWinner(): Outcome {
    const { validator, board } = this;

    return validator.hasPlayerWon({ board, isPlayer1: true })
      ? Outcome.PLAYER_ONE
      : validator.hasPlayerWon({ board, isPlayer1: false })
      ? Outcome.PLAYER_TWO
      : Outcome.TIE;
  }

  play(): TicTacToeResults {
    let isPlayer1 = true;

    while (!this.hasGameEnded()) {
      this.makePlay(isPlayer1);
      isPlayer1 = !isPlayer1;
    }

    return {
      winner: this.getWinner(),
      plays: this.plays,
    };
  }
}
