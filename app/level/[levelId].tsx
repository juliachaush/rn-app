import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { AnimatedQuizCard } from "../../src/components/molecules/AnimatedQuizCard/AnimatedQuizCard";
import { useQuizzesContext } from "../../src/context/QuizzesContext/useQuizzesContext";
import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { Theme } from "../../src/theme/theme";
import { useTheme } from "../../src/theme/themeProvider";

export default function LevelQuizzesScreen() {
  const { levelId } = useLocalSearchParams<{ levelId: string }>();
  const { currentQuizzes, currentLoading, currentError, loadLevel } =
    useQuizzesContext();
  const levelQuizzes = currentQuizzes[0]?.quizzes;

  const theme = useTheme();
  const cs = styles(theme);

  useEffect(() => {
    if (levelId) {
      loadLevel(levelId);
    }
  }, [levelId, loadLevel]);

  return (
    <BackButtonLayout title={`Level ${levelId}`} isScroll={false}>
      <FlatList
        contentContainerStyle={cs.container}
        data={levelQuizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <AnimatedQuizCard
            id={item.id}
            title={item.title}
            description={item.title}
            index={index}
          />
        )}
      />
    </BackButtonLayout>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 16,
      marginTop: 16,
      backgroundColor: theme.colors.background,
    },
    loadingText: {
      color: theme.colors.background,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
