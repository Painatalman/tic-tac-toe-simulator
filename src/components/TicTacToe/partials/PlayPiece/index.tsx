import TextBlueO from "./pieces/TextBlueO";
import TextRedCross from "./pieces/TextRedCross";

enum PlayerSymbol {
  PLAYER_1 = "1",
  PLAYER_2 = "2",
  SPACE = "0"
}



export default function index({playerSymbol}:{playerSymbol:string}) {
  return playerSymbol == PlayerSymbol.PLAYER_1 ? <TextRedCross /> : playerSymbol == PlayerSymbol.PLAYER_2 ? <TextBlueO /> : <>__</>
}
