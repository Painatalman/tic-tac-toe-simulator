import getRandomIntUpTo from "../utils/getRandomIntUpTo";
import {
  Board,
  BoardPlay,
  TicTacToeResults,
  Outcome,
  BoardSpaceSymbol,
  TicTacToeStrategy,
} from "./types";
import TicTacToeValidator from "./validator";

export default class TicTacToe {
  board: Board;
  plays: BoardPlay[];
  player1Char: string;
  player2Char: string;
  emptyChar: string;
  validator: TicTacToeValidator;
  player1Strategy: TicTacToeStrategy;
  player2Strategy: TicTacToeStrategy;

  constructor({
    player1Strategy,
    player2Strategy,
  }: {
    player1Strategy: TicTacToeStrategy;
    player2Strategy: TicTacToeStrategy;
  }) {
    this.player1Char = BoardSpaceSymbol.PLAYER_1;
    this.player1Strategy = player1Strategy;
    this.player2Char = BoardSpaceSymbol.PLAYER_2;
    this.player2Strategy = player2Strategy;
    this.emptyChar = BoardSpaceSymbol.EMPTY;
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

  private makePlay(isPlayerOne: boolean) {
    const character = this.getPlayerCharacter(isPlayerOne);
    const { line, column } = isPlayerOne
      ? this.player1Strategy.getPlay({ board: this.board })
      : this.player2Strategy.getPlay({ board: this.board });

    this.board[line][column] = character;
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
    let isPlayer1 = getRandomIntUpTo(2) === 0 ? true : false;

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
