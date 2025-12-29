import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { useTheme } from "../../../theme/themeProvider";
import { Image } from "../../atoms/Image/Image";

import createStyles from "./styles";

type CenteredIconCardProps = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
};

export const CenteredIconCard = ({
  id,
  title,
  subtitle,
  date,
}: CenteredIconCardProps) => {
  const router = useRouter();

  const theme = useTheme();
  const cs = createStyles(theme);
  const themeColor = theme.colors.alert;

  const handlePress = () => {
    router.push(`/quiz/${id}`);
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
        <View style={[cs.iconWrapper, { backgroundColor: `${themeColor}55` }]}>
          <Image
            source={require("../../../../assets/images/cookie-with-book.png")}
            style={cs.cardImg}
            width={80}
            height={80}
          />
        </View>

        <View style={[cs.dateBadge, { backgroundColor: themeColor }]}>
          <Text style={cs.dateText}>{date}</Text>
        </View>

        <View style={cs.textContainer}>
          <Text style={cs.title}>{title}</Text>
          <Text style={cs.subtitle}>{subtitle}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
