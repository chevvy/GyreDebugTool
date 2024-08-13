import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { KillPlayerButton } from "./components/KillCharacterButton";

export default function App() {
  return (
    <View style={styles.container}>
      <KillPlayerButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
