import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { Button, Switch, Text, View } from "react-native-ui-lib";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  iconName?: string;
}

export function ActionButton({ label, onPress, iconName }: ActionButtonProps) {
  // TODO handle any
  return (
    <Button onPress={onPress} margin-10>
      <FontAwesome
        name={(iconName as any) ?? "times-circle"}
        size={24}
        style={styles.buttonIcon}
      />

      <Text>{label}</Text>
    </Button>
  );
}

interface ActionSwitchProps extends ActionButtonProps {
  value: boolean;
}
export function ActionSwitch({ label, onPress, value }: ActionSwitchProps) {
  return (
    <View row>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
