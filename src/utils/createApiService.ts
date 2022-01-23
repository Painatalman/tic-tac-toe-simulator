import { TicTacToeService } from "@services/TicTacToe/types";
import ApiTicTacToeService from "../services/TicTacToe/Api";

export default function createApiService(): TicTacToeService {
  const endpoint: string | undefined = process.env.NEXT_PUBLIC_API_URL;

  if (!endpoint) {
    throw new Error("Please define API_URL in your env file");
  }

  return new ApiTicTacToeService(endpoint);
}
