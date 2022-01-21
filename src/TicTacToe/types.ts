export interface TicTacToeOptions {
  player1Char?: string;
  player2Char?: string;
  emptyChar?: string;
}

export type Board = string[][]

export type BoardPlay = Board

export interface TicTacToeResults {
  winner: string,
  plays: BoardPlay[]
}

export interface ValidatorMethodOptions {
  board: Board,
  isPlayer1: boolean
}

export interface ITicTacToeValidator {
  hasPlayerWon(options:ValidatorMethodOptions): boolean
  hasEmptySpaces(board: Board):boolean
}

export enum Outcome {
  PLAYER_ONE = "Player 1",
  PLAYER_TWO = "Player 2",
  TIE = "Tie"
}
