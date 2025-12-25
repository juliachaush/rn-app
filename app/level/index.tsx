import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const levels = ["1", "2"];

export default function LevelsScreen() {
  const router = useRouter();

  return (
    <View>
      {levels.map((level) => (
        <Pressable key={level} onPress={() => router.push(`/level/${level}`)}>
          <Text>Level {level}</Text>
        </Pressable>
      ))}
    </View>
  );
}
