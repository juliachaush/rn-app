import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { useTheme } from "../../../theme/themeProvider";
import { IconSymbol } from "../../atoms/Icon";
import { Image } from "../../atoms/Image/Image";

import createStyles from "./styles";

type NavigationCardProps = {
  title: string;
  id: number | string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  cardColor?: string;
  isImage: boolean;
};

export const NavigationCard = ({
  title,
  id,
  subtitle,
  iconName,
  cardColor,
  isImage,
}: NavigationCardProps) => {
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
      style={({ pressed }) => [
        { ...cs.card, backgroundColor: cardColor || theme.colors.surface },
        pressed && cs.pressed,
      ]}
    >
      <View style={cs.leftContent}>
        {isImage && (
          <Image
            source={require("../../../../assets/icons/star.png")}
            style={cs.cardImg}
            width={60}
            height={60}
          />
        )}
        {iconName && (
          <View style={cs.iconContainer}>
            <Ionicons name={iconName} size={22} color={theme.colors.accent} />
          </View>
        )}
        <View style={cs.textContainer}>
          <Text style={cs.title}>{title}</Text>
          {subtitle && <Text style={cs.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      <IconSymbol
        name="chevron.right"
        size={24}
        color={theme.colors.onPrimary}
      />
    </Pressable>
  );
};
