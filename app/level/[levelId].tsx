import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

import { QuizCard } from "../../src/components";
import { useQuizzesByLevel } from "../../src/hooks/useQuizzesByLevel";
import { Theme } from "../../src/styles/theme/theme";
import { useTheme } from "../../src/styles/theme/themeProvider";

export default function LevelQuizzesScreen() {
  const router = useRouter();
  const { levelId } = useLocalSearchParams<{ levelId: string }>();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const theme = useTheme();
  const cs = styles(theme);

  const { data: quizzes, loading, error } = useQuizzesByLevel(levelId);
  const data = quizzes?.[0] ?? { quizzes: [] };

  console.log("datad", quizzes);
  if (!levelId) {
    return <Text>Level not found</Text>;
  }

  if (loading) return <Text style={cs.loadingText}>Loading...</Text>;
  if (error) return <Text style={cs.loadingText}>Error: {error}</Text>;

  const handlePress = (id: string) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => router.push(`/quiz/${id}`));
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        Quizzes for Level {levelId}
      </Text>

      {data?.quizzes?.map((quizz) => (
        <Pressable key={quizz.id} onPress={() => handlePress(quizz.id)}>
          <Animated.View
            style={{
              transform: [{ scale: scaleAnim }],
              marginHorizontal: 16,
            }}
          >
            <QuizCard
              id={quizz.id}
              title={quizz.title}
              description={quizz.title}
              image={require("../../assets/images/mascot_puppy.jpg")}
            />
          </Animated.View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    loadingText: {
      color: theme.colors.background,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
