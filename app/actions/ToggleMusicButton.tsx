import { toggleMusicRequest } from "../gameService/gameService";
import { ActionButton } from "./ActionButton";

export const ToggleMusicButton = () => {
  return (
    <ActionButton
      onPress={toggleMusicRequest}
      label="Toggle Music"
      iconName="music"
    />
  );
};
