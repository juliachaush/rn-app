import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTheme } from "../../styles/theme/themeProvider";
import { IconSymbol } from "../index";

import createStyles from "./styles";

type MenuCardProps = {
  title: string;
  id: number | string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  cardColor?: string;
  isImage: boolean;
};

export const MenuCard = ({
  title,
  id,
  subtitle,
  iconName,
  cardColor,
  isImage,
}: MenuCardProps) => {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme);

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
        { ...styles.card, backgroundColor: cardColor || theme.colors.surface },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.leftContent}>
        {isImage && (
          <Image
            source={require("../../icons/star.png")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
        )}
        {iconName && (
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={22} color={theme.colors.accent} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
