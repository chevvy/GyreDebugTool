import { StatusBar } from "expo-status-bar";
import { Card, View } from "react-native-ui-lib";
import { KillPlayerButton } from "./components/KillCharacterButton";
import { ToggleMusicButton } from "./components/ToggleMusicButton";
import { ExpandableUtilities } from "./components/ExpandableSection";
import { GameState } from "./app/game-state/GameState";
import { useGameState } from "./app/game-state/useGameState";
import { AddKeysButton } from "./components/AddKeysButton";
import { DeleteKeysButton } from "./components/DeleteKeysButton";

export default function App() {
  const gameState = useGameState();
  // TODO Create utilities component
  return (
    <View flex marginV-30>
      <GameState gameState={gameState} />
      <Card margin-10 padding-10>
        <ExpandableUtilities name="Character tools">
          <View>
            <KillPlayerButton />
            <AddKeysButton />
            <DeleteKeysButton />
          </View>
        </ExpandableUtilities>
        <ExpandableUtilities name="Sound Tools">
          <ToggleMusicButton />
        </ExpandableUtilities>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}
