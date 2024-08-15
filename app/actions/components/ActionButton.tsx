import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { Button, Switch, Text, View } from "react-native-ui-lib";

export interface ActionButtonProps {
  label: string;
  onPress: () => void;
  iconName?: string;
  disabled?: boolean;
}

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
