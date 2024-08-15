import { toggleMusicRequest } from "../../gameService/gameService";
import { ActionButton } from "../components/ActionButton";
import { ActionProps } from "../actions.type";
import { ActionSwitch } from "../components/ActionSwitch";

interface ToggleMusicButtonProps extends ActionProps {
  value: boolean;
}

export const ToggleMusicButton = (props: ToggleMusicButtonProps) => {
  return (
    <ActionSwitch
      {...props}
      label="Toggle Music"
      onPress={toggleMusicRequest}
    />
  );
};

// return (
//   <ActionButton
//     onPress={toggleMusicRequest}
//     label="Toggle Music"
//     iconName="music"
//     {...props}
//   />
// );
