import React from "react";
import { StyleSheet, View } from "react-native";

import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { QuizPlayScreen } from "../../src/screens";

export interface Question {
  category?: string;
  question?: string;
  answers?: string[];
  correct?: number;
}

export default function QuizPlayPage() {
  return (
    <BackButtonLayout>
      <View style={styles.container}>
        <QuizPlayScreen />
      </View>
    </BackButtonLayout>
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

  question: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 24,
    color: "#FFFFFF",
  },

  answerBtn: {
    padding: 18,
    backgroundColor: "#181818",
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#282828",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },

  answerText: {
    fontSize: 17,
    color: "#EDEDED",
    fontWeight: "500",
  },

  correct: {
    backgroundColor: "#1DB954",
    borderColor: "#1ED760",
  },

  wrong: {
    backgroundColor: "#E91429",
    borderColor: "#ff4f5e",
  },

  finish: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1DB954",
  },
});
