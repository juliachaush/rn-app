import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EviewScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../../src/images/cookie.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text style={styles.category}>There would be your path</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#121212",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },

  category: {
    color: "#1DB954",
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
});
