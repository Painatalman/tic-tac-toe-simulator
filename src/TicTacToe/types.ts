export type Board = string[][];

export type BoardPlay = Board;

export interface TicTacToeResults {
  winner: string;
  plays: BoardPlay[];
}

export interface ValidatorMethodOptions {
  board: Board;
  isPlayer1: boolean;
}

export interface ITicTacToeValidator {
  hasPlayerWon(options: ValidatorMethodOptions): boolean;
  hasEmptySpaces(board: Board): boolean;
}

export enum Outcome {
  PLAYER_ONE = "Player 1",
  PLAYER_TWO = "Player 2",
  TIE = "Tie",
}

export enum BoardSpaceSymbol {
  EMPTY = "0",
  PLAYER_1 = "1",
  PLAYER_2 = "2",
}

type BoardPosition = {
  line: number;
  column: number;
};

type TicTacToeStrategyOptions = {
  board?: Board;
  player?: BoardSpaceSymbol.PLAYER_2 | BoardSpaceSymbol.PLAYER_2;
};

export interface TicTacToeStrategy {
  getPlay(options: TicTacToeStrategyOptions): BoardPosition;
}
