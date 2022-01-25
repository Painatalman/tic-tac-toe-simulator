import getRandomIntUpTo from "@utils/getRandomIntUpTo";
import { Board, BoardSpaceSymbol, TicTacToeStrategy } from "../types";

export default class RandomTicTacToeStrategy implements TicTacToeStrategy {
  getPlay({ board }: { board: Board }) {
    let line = getRandomIntUpTo(3);
    let column = getRandomIntUpTo(3);

    while (board[line][column] !== BoardSpaceSymbol.EMPTY) {
      line = getRandomIntUpTo(3);
      column = getRandomIntUpTo(3);
    }

    return { line, column };
  }
}
