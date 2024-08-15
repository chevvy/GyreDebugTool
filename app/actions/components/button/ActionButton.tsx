import { FontAwesome } from "@expo/vector-icons";
import { Button, Text, View } from "react-native-ui-lib";
import { ActionButtonProps } from "./actionButton.type";

export function ActionButton({
  label,
  onPress,
  iconName,
  disabled,
}: ActionButtonProps) {
  // TODO handle any
  return (
    <Button onPress={onPress} margin-10 disabled={disabled}>
      <View paddingR-8>
        <FontAwesome name={(iconName as any) ?? "times-circle"} size={24} />
      </View>
      <Text>{label}</Text>
    </Button>
  );
}
