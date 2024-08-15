import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ExpandableSection, Text, View } from "react-native-ui-lib";
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
    <View style={styles.container}>
      <Text>Is music playing: {String(gameState.isMusicPlaying)}</Text>
      <ExpandableUtilities name="Character tools">
        <KillPlayerButton />
      </ExpandableUtilities>
      <ExpandableUtilities name="Sound Tools">
        <ToggleMusicButton />
      </ExpandableUtilities>
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
