// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TicTacToeResults } from "../../src/TicTacToe/types";
import TicTacToeSimulator from "../../src/TicTacToe/simulator";
import RandomTicTacToeStrategy from "src/TicTacToe/strategy/random";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TicTacToeResults>
) {
  const game = new TicTacToeSimulator({
    player1Strategy: new RandomTicTacToeStrategy(),
    player2Strategy: new RandomTicTacToeStrategy(),
  });
  res.status(200).json(game.play());
}
