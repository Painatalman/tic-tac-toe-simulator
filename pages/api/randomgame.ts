// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TicTacToeResults } from '../../src/TicTacToe/types'
import TicTacToeSimulator from "../../src/TicTacToe/simulator"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TicTacToeResults>
) {
  const game = new TicTacToeSimulator()
  res.status(200).json(game.play())
}
