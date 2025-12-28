import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { AnimatedQuizCard } from "../../src/components/AnimatedQuizCard/AnimatedQuizCard";
import { useLevelQuizzes } from "../../src/hooks/useLevelQuizzes";
import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { Theme } from "../../src/theme/theme";
import { useTheme } from "../../src/theme/themeProvider";

export default function LevelQuizzesScreen() {
  const { levelId } = useLocalSearchParams<{ levelId: string }>();
  const theme = useTheme();
  const cs = styles(theme);

  const { levelQuizzes, loading, error } = useLevelQuizzes(levelId ?? null);

  if (!levelId) return <Text>Level not found</Text>;
  if (loading) return <Text style={cs.loadingText}>Loading...</Text>;
  if (error) return <Text style={cs.loadingText}>Error: {error}</Text>;
  if (!levelQuizzes.length)
    return <Text style={cs.loadingText}>No quizzes found</Text>;

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
    container: { flexGrow: 1, paddingVertical: 16, marginTop: 16 },
    loadingText: {
      color: theme.colors.background,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
