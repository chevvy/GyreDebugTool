import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
}

export function ActionButton({ label, onPress }: ActionButtonProps) {
  return (
    <View
      style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
      ]}
    >
      <Pressable
        style={[styles.button, { backgroundColor: "#fff" }]}
        onPress={onPress}
      >
        <FontAwesome
          name="times-circle"
          size={24}
          color="black"
          style={styles.buttonIcon}
        />

        <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
      </Pressable>
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
