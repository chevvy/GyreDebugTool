import { StatusBar } from "expo-status-bar";
import { Card, View } from "react-native-ui-lib";
import { KillPlayerButton } from "./components/KillCharacterButton";
import { ToggleMusicButton } from "./components/ToggleMusicButton";
import { ExpandableUtilities } from "./components/ExpandableSection";
import { GameState } from "./app/game-state/GameState";

export default function App() {
  return (
    <View flex marginV-30>
      <GameState />
      <Card margin-10 padding-10>
        <ExpandableUtilities name="Character tools">
          <KillPlayerButton />
        </ExpandableUtilities>
        <ExpandableUtilities name="Sound Tools">
          <ToggleMusicButton />
        </ExpandableUtilities>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}
