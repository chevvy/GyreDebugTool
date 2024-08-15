import { Card, View } from "react-native-ui-lib";
import { ExpandableMenu } from "../../components/ExpandableMenu";
import { AddKeysButton } from "./characterTools/AddKeysButton";
import { DeleteKeysButton } from "./characterTools/DeleteKeysButton";
import { KillPlayerButton } from "./characterTools/KillCharacterButton";
import { ToggleMusicButton } from "./soundTools/ToggleMusicButton";
import { GameStateData } from "../gameService/gameService.type";

interface ActionsMenuProps {
  gameState: GameStateData;
}

export const ActionsMenu = ({ gameState }: ActionsMenuProps) => {
  const props = { disabled: !gameState };
  return (
    <View>
      <Card margin-10 padding-10>
        <ExpandableMenu name="Character Tools">
          <View>
            <KillPlayerButton {...props} />
            <AddKeysButton {...props} />
            <DeleteKeysButton {...props} />
          </View>
        </ExpandableMenu>
        <ExpandableMenu name="Sound Tools">
          <ToggleMusicButton {...props} value={gameState?.isMusicPlaying} />
        </ExpandableMenu>
      </Card>
    </View>
  );
};
