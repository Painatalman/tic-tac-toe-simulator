import { TicTacToeResults } from "../../TicTacToe/types";
import { TicTacToeService } from "./types";

export default class ApiTicTacToeService implements TicTacToeService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  async getRandomGame(): Promise<TicTacToeResults> {
    const res = await fetch(`${this.endpoint}/randomgame`);

    return await res.json();
  }
}
