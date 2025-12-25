import { Stack } from "expo-router";

export default function LevelLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Levels" }} />
      <Stack.Screen name="LevelQuizzesScreen" options={{ title: "Quizzes" }} />
    </Stack>
  );
}
