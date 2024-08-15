import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { KillPlayerButton } from "./components/KillCharacterButton";
import { ToggleMusicButton } from "./components/ToggleMusicButton";
import { useEffect, useState } from "react";
import {
  GameStateRequest,
  GameStateRequestData,
} from "./app/game-service/game-service";

export default function App() {
  // TODO don't use game state data type
  const [gameState, setGameState] = useState<GameStateRequestData>({
    isMusicPlaying: true,
  });
  useEffect(() => {
    GameStateRequest().then((x) => {
      console.log("setting game state", x);
      setGameState(x);
    });
  }, []);
  console.log("gamestate is ", gameState.isMusicPlaying);
  return (
    <View style={styles.container}>
      <Text>Is music playing: {String(gameState.isMusicPlaying)}</Text>
      <KillPlayerButton />
      <ToggleMusicButton />
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
