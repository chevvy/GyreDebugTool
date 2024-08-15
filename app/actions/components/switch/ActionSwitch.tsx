import { View, Switch, Text } from "react-native-ui-lib";
import { ActionSwitchProps } from "./actionSwitch.type";

export function ActionSwitch({
  label,
  onPress,
  value,
  disabled,
}: ActionSwitchProps) {
  return (
    <View row centerV>
      <Text>{label}</Text>
      <View paddingL-10>
        <Switch value={value} onValueChange={onPress} disabled={disabled} />
      </View>
    </View>
  );
}
