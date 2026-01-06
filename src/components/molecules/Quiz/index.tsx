import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { ASSETS } from "../../../../assets";
import { useTheme } from "../../../theme/themeProvider";
import { LocalImage } from "../../atoms/Image/LocalImage";
import createStyles from "./styles";

type QuizCardProps = {
  id: string;
  title: string;
  description: string;
  imageKey?: string;
};

export const levelImages: Record<string, any> = {
  "1": ASSETS.images.mascotPuppy,
  "2": ASSETS.images.mascotOne,
  "3": ASSETS.images.mascotPuppy,
  "4": ASSETS.images.mascotOne,
  "5": ASSETS.images.mascotPuppy,
};

export const QuizCard = ({
  id,
  title,
  description,
  imageKey,
}: QuizCardProps) => {
  const router = useRouter();
  const theme = useTheme();
  const cs = createStyles(theme);

  const imageSource = imageKey ? levelImages[imageKey] : levelImages[id];

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
          <LocalImage
            source={imageSource}
            style={cs.image}
            width={80}
            height={80}
          />

          <View style={cs.textContainer}>
            <Text style={cs.title}>{title}</Text>
            <Text style={cs.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
