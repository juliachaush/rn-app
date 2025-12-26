import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProgressWheel from "../../../src/components/Progress";

const levels = [
  { id: "1", title: "Level 1" },
  { id: "2", title: "Level 2" },
  { id: "3", title: "Level 3" },
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function PlayScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressLevel = (levelId: string) => {
    router.push(`/level/${levelId}`);
  };

  // const handlePress = (id: string) => {
  //   Animated.sequence([
  //     Animated.timing(scaleAnim, {
  //       toValue: 0.95,
  //       duration: 100,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(scaleAnim, {
  //       toValue: 1,
  //       duration: 100,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(() => router.push(`/quiz/${id}`));
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <ScrollView>
        <View style={styles.progressContainer}>
          <ProgressWheel />
        </View>

        <Text style={styles.headText}>Your daily quizzes</Text>

        {/* {["1", "2"].map((id) => (
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
                    ? require("../../../src/images/mascot-one.jpg")
                    : require("../../../src/images/mascot_puppy.jpg")
                }
              />
            </Animated.View>
          </Pressable>
        ))} */}
      </ScrollView>
      <FlatList
        data={levels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePressLevel(item.id)}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  progressContainer: { padding: 24 },
  headText: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 24,
  },
  quizCardWrapper: {
    borderRadius: 20,
    margin: 12,
    overflow: "hidden",
  },
});
