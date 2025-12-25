import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import HeaderLayout from "../../../src/layouts/HeaderLayout";
import { HomeScreen } from "../../../src/screens";

export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderLayout>
        <HomeScreen />
      </HeaderLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191414",
  },
});
