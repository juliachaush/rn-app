import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

import { QuizCard } from "../../src/components";

type Quiz = {
  id: string;
  title: string;
};

const allQuizzes = {
  "1": [
    { id: "q1", title: "React Basics" },
    { id: "q2", title: "JS Fundamentals" },
  ],
  "2": [{ id: "q3", title: "Advanced React" }],
} as const;

type LevelId = keyof typeof allQuizzes;

export default function LevelQuizzesScreen() {
  const router = useRouter();
  const { levelId } = useLocalSearchParams<{ levelId: LevelId }>();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  if (!levelId) {
    return <Text>Level not found</Text>;
  }

  const quizzes = allQuizzes[levelId];

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

      {["1", "2"].map((id) => (
        <Pressable key={id} onPress={() => handlePress(id)}>
          <Animated.View
            style={{
              transform: [{ scale: scaleAnim }],
              marginHorizontal: 16,
            }}
          >
            <QuizCard
              id={id}
              title={id === "1" ? "React Native Basics" : "Native Modules"}
              description={
                id === "1"
                  ? "Learn components and styles"
                  : "Location Camera Sound"
              }
              image={
                id === "1"
                  ? require("../../src/images/mascot-one.jpg")
                  : require("../../src/images/mascot_puppy.jpg")
              }
            />
          </Animated.View>
        </Pressable>
      ))}
    </View>
  );
}
