import { Card, View } from "react-native-ui-lib";
import { ExpandableUtilities } from "../../components/ExpandableSection";
import { AddKeysButton } from "./AddKeysButton";
import { DeleteKeysButton } from "./DeleteKeysButton";
import { KillPlayerButton } from "./KillCharacterButton";
import { ToggleMusicButton } from "./ToggleMusicButton";
import { GameStateData } from "../gameService/gameService";

interface ActionsMenuProps {
  gameState: GameStateData;
}

export const ActionsMenu = ({ gameState }: ActionsMenuProps) => {
  const props = { disabled: !gameState };
  return (
    <View>
      <Card margin-10 padding-10>
        <ExpandableUtilities name="Character tools">
          <View>
            <KillPlayerButton {...props} />
            <AddKeysButton {...props} />
            <DeleteKeysButton {...props} />
          </View>
        </ExpandableUtilities>
        <ExpandableUtilities name="Sound Tools">
          <ToggleMusicButton {...props} />
        </ExpandableUtilities>
      </Card>
    </View>
  );
};
