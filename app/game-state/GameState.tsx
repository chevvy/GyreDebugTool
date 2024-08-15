import { Card, Text, View } from "react-native-ui-lib";
import { Information } from "./Information";
import { GameStateData } from "../game-service/game-service";
import { FontAwesome } from "@expo/vector-icons";

interface GameStateProps {
  gameState: GameStateData;
}

const TITLE = "Gyre Debug Tool";

export const GameState = ({ gameState }: GameStateProps) => {
  if (!gameState) {
    return (
      <View>
        <View row centerV centerH>
          <Text $textDangerLight center marginT-20 text50BO>
            Unable to connect to game
          </Text>
        </View>
        <Text $textNeutral center marginV-20 text30BO>
          {TITLE}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text $textPrimary center marginV-20 text30BO>
        {TITLE}
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
