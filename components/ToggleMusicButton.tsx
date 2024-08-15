import { toggleMusicRequest } from "../app/game-service/game-service";
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
