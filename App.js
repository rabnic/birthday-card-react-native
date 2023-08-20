import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./pages/HomeScreen";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      // colors={["#1f0537", "#380c60", "#55108c", "#7413bb", "#9612eb"]}
      colors={["#9612eb", "#7413bb", "#55108c", "#380c60", "#1f0537"]}
    >
      <HomeScreen />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 500,
  },
  toolBar: {
    height: 40,
    backgroundColor: "transparent",
  },
});
