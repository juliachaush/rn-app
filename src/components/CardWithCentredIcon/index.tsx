import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { IconSymbol } from "../index";

import styles from "./styles";

interface BigActionCardProps {
  title: string;
  subtitle: string;
  date: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  id: string;
  themeColor?: any;
}

export const BigActionCard = ({
  title,
  subtitle,
  date,
  iconName,
  id,
  themeColor = styles.themedColotr,
}: BigActionCardProps) => {
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
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View
        style={[styles.iconWrapper, { backgroundColor: `${themeColor}15` }]}
      >
        <IconSymbol name="chevron.right" size={24} color={styles.iconColor} />
      </View>
      <View style={[styles.dateBadge, { backgroundColor: themeColor }]}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};
