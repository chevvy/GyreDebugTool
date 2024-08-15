import { StatusBar } from "expo-status-bar";
import { View } from "react-native-ui-lib";
import { GameState } from "./app/gameState/GameState";
import { useGameState } from "./app/gameState/useGameState";
import { ActionsMenu } from "./app/actions/ActionsMenu";

export default function App() {
  const gameState = useGameState();
  return (
    <View flex marginV-30>
      <GameState gameState={gameState} />
      <ActionsMenu gameState={gameState} />
      <StatusBar style="auto" />
    </View>
  );
}
