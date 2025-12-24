import { Ionicons } from "@expo/vector-icons"; // Входить у склад Expo
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { IconSymbol } from "../index";

import styles from "./styles";

interface MenuCardProps {
  title: string;
  id: number | string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}

export const MenuCard = ({ title, id, subtitle, iconName }: MenuCardProps) => {
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
      <View style={styles.leftContent}>
        {iconName && (
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={22} color="#007AFF" />
          </View>
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      <IconSymbol name="chevron.right" size={24} color={styles.iconColor} />
    </Pressable>
  );
};
