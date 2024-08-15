import { useEffect, useState } from "react";
import {
  GameStateRequest,
  GameStateRequestData,
} from "../game-service/game-service";
import { Card, ExpandableSection, Text, View } from "react-native-ui-lib";
import { Information } from "./Information";

export const GameState = () => {
  // TODO don't use game state data type
  const [gameState, setGameState] = useState<GameStateRequestData>({
    isMusicPlaying: true,
    keysQuantity: 0,
  });
  // TODO extract to custom hook
  useEffect(() => {
    const toggle = setInterval(() => {
      GameStateRequest().then((state) => setGameState(state));
    }, 1000);

    return () => clearInterval(toggle);
  }, []);

  return (
    <View>
      <Text $textPrimary center marginV-20 text30BO>
        Gyre Debug Tool
      </Text>
      <Card margin-10 padding-10>
        <Text text40BO>Game State</Text>
        <Information
          name="Is Music Playing"
          value={String(gameState.isMusicPlaying)}
        />
        <Information name="Keys" value={String(gameState.keysQuantity)} />
      </Card>
    </View>
  );
};
