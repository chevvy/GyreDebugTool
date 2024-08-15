import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Card, ExpandableSection, Text, View } from "react-native-ui-lib";
import { KillPlayerButton } from "./components/KillCharacterButton";
import { ToggleMusicButton } from "./components/ToggleMusicButton";
import { useEffect, useState } from "react";
import {
  GameStateRequest,
  GameStateRequestData,
} from "./app/game-service/game-service";
import { ExpandableUtilities } from "./components/ExpandableSection";

export default function App() {
  // TODO don't use game state data type
  const [gameState, setGameState] = useState<GameStateRequestData>({
    isMusicPlaying: true,
    keysQuantity: 0,
  });

  // TODO extract to custom hook
  useEffect(() => {
    GameStateRequest().then((state) => setGameState(state));
  }, []);
  return (
    <View flex marginV-30>
      <Text $textPrimary center marginV-20 text30BO>
        Gyre Debug Tool
      </Text>
      <Card margin-10 padding-10>
        <Text text40BO>Game State</Text>
        <View row>
          <Text underline text70M>
            Is music playing
          </Text>
          <Text text70> : </Text>
          <Text text70>{String(gameState.isMusicPlaying)}</Text>
        </View>
      </Card>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
