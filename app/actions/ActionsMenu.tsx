import { Card, View } from "react-native-ui-lib";
import { ExpandableUtilities } from "../../components/ExpandableSection";
import { AddKeysButton } from "./characterTools/AddKeysButton";
import { DeleteKeysButton } from "./characterTools/DeleteKeysButton";
import { KillPlayerButton } from "./characterTools/KillCharacterButton";
import { ToggleMusicButton } from "./soundTools/ToggleMusicButton";
import { GameStateData } from "../gameService/gameService";

interface ActionsMenuProps {
  gameState: GameStateData;
}

export const ActionsMenu = ({ gameState }: ActionsMenuProps) => {
  const props = { disabled: !gameState };
  return (
    <View>
      <Card margin-10 padding-10>
        <ExpandableUtilities name="Character Tools">
          <View>
            <KillPlayerButton {...props} />
            <AddKeysButton {...props} />
            <DeleteKeysButton {...props} />
          </View>
        </ExpandableUtilities>
        <ExpandableUtilities name="Sound Tools">
          <ToggleMusicButton {...props} value={gameState?.isMusicPlaying} />
        </ExpandableUtilities>
      </Card>
    </View>
  );
};
