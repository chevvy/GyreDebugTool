import { toggleMusicRequest } from "../gameService/gameService";
import { ActionButton } from "./ActionButton";
import { ActionProps } from "./actions.type";

export const ToggleMusicButton = (props: ActionProps) => {
  return (
    <ActionButton
      onPress={toggleMusicRequest}
      label="Toggle Music"
      iconName="music"
      {...props}
    />
  );
};
