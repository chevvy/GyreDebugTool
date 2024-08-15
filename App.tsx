import { StatusBar } from "expo-status-bar";
import { Card, View } from "react-native-ui-lib";
import { KillPlayerButton } from "./app/actions/KillCharacterButton";
import { ToggleMusicButton } from "./app/actions/ToggleMusicButton";
import { ExpandableUtilities } from "./components/ExpandableSection";
import { GameState } from "./app/gameState/GameState";
import { useGameState } from "./app/gameState/useGameState";
import { AddKeysButton } from "./app/actions/AddKeysButton";
import { DeleteKeysButton } from "./app/actions/DeleteKeysButton";

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
