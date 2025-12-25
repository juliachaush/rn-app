import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

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

  if (!levelId) {
    return <Text>Level not found</Text>;
  }

  const quizzes = allQuizzes[levelId];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        Quizzes for Level {levelId}
      </Text>

      <FlatList<Quiz>
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/quiz/${item.id}`)}
            style={{
              padding: 16,
              marginBottom: 12,
              backgroundColor: "#1DB954",
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
