import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 16,
  },
  title: {
    color: Colors.primary,
    fontFamily: "Nunito Sans",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
  },
});
