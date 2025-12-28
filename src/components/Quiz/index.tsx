import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTheme } from "../../theme/themeProvider";

import createStyles from "./styles";

type Props = {
  id: string;
  title: string;
  description: string;
  imageKey?: any;
};

export const levelImages: Record<string, any> = {
  "1": require("../../../assets/images/mascot_puppy.jpg"),
  "2": require("../../../assets/images/mascot-one.jpg"),
  "3": require("../../../assets/images/mascot_puppy.jpg"),
  "4": require("../../../assets/images/mascot-one.jpg"),
  "5": require("../../../assets/images/mascot_puppy.jpg"),
};

export const QuizCard = ({ id, title, description, imageKey }: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const cs = createStyles(theme);
  const imageSource = (imageKey && levelImages[imageKey]) || levelImages[id];

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
          <Image source={imageSource} style={cs.image} resizeMode="contain" />

          <View style={cs.textContainer}>
            <Text style={cs.title}>{title}</Text>
            <Text style={cs.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
