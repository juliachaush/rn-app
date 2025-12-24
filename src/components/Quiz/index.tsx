import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import styles from "./style";

type Props = {
  id: string;
  title: string;
  description: string;
  image: any;
};

export const QuizCard = ({ id, title, description, image }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/quiz/[id]",
      params: { id },
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.cardContainer, pressed && styles.pressed]}
    >
      <LinearGradient colors={["#1DB954", "#0f3d2e"]} style={styles.gradient}>
        <View style={styles.row}>
          <Image source={image} style={styles.image} resizeMode="contain" />

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
