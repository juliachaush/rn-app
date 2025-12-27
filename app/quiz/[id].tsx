import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { QuizPlayScreen } from "../../src/screens";
import { RootState } from "../../src/store";
import { Theme } from "../../src/styles/theme/theme";
import { useTheme } from "../../src/styles/theme/themeProvider";

export interface Question {
  category?: string;
  question?: string;
  answers?: string[];
  correct?: number;
}

export default function QuizPlayPage() {
  const { quizId } = useLocalSearchParams<{ quizId: string }>();
  const theme = useTheme();
  const cs = styles(theme);
  const { currentLevel } = useSelector(
    (state: RootState) => state.userLevelResults,
  );

  return (
    <BackButtonLayout>
      <View style={cs.container}>
        <QuizPlayScreen />
      </View>
    </BackButtonLayout>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    loadingText: {
      color: theme.colors.background,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
