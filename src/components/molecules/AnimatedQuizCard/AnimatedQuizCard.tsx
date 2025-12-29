import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { Animated, Pressable } from "react-native";

import { QuizCard } from "../../../components/molecules/Quiz";

type AnimatedQuizCardProps = {
  id: string;
  title: string;
  description?: string;
  index: number;
};

export const AnimatedQuizCard = ({
  id,
  title,
  description,
  index,
}: AnimatedQuizCardProps) => {
  const scale = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => router.push(`/quiz/${id}`));
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={{
          transform: [{ scale }],
          marginHorizontal: 16,
          marginVertical: 8,
        }}
      >
        <QuizCard id={id} title={title} description={description ?? title} />
      </Animated.View>
    </Pressable>
  );
};
