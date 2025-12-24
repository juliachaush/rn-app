import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProgressWheel from "../../../src/components/Progress";
import { QuizCard } from "../../../src/components/Quiz";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function PlayScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <ScrollView>
        <View style={styles.progressContainer}>
          <ProgressWheel />
        </View>

        <Text style={styles.headText}>Your daily quizzes</Text>

        {["1", "2"].map((id) => (
          <Pressable key={id} onPress={() => handlePress(id)}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <LinearGradient
                colors={["#d3d3d3", "#a91313"]}
                style={styles.quizCardWrapper}
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
              </LinearGradient>
            </Animated.View>
          </Pressable>
        ))}
      </ScrollView>
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
