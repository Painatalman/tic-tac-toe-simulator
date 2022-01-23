import { TicTacToeResults } from "../../TicTacToe/types";

export interface TicTacToeService {
  getRandomGame(): Promise<TicTacToeResults>;
}
