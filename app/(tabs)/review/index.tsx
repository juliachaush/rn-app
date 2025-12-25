import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EviewScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.category}>This page in progress...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
  },

  category: {
    color: "#1DB954",
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
});
