import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTheme } from "../../styles";

import createStyles from "./styles";

type Props = {
  id: string;
  title: string;
  description: string;
  image: any;
};

export const QuizCard = ({ id, title, description, image }: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const cs = createStyles(theme);

  const handlePress = () => {
    router.push({
      pathname: "/quiz/[id]",
      params: { id },
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [cs.cardContainer, pressed && cs.pressed]}
    >
      <LinearGradient
        colors={[theme.colors.accent, theme.colors.darkAccent]}
        style={cs.gradient}
      >
        <View style={cs.row}>
          <Image source={image} style={cs.image} resizeMode="contain" />

          <View style={cs.textContainer}>
            <Text style={cs.title}>{title}</Text>
            <Text style={cs.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
