import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTheme } from "../../styles/theme/themeProvider";

import createStyles from "./styles";

interface BigActionCardProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
}

export const BigActionCard: React.FC<BigActionCardProps> = ({
  id,
  title,
  subtitle,
  date,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme);

  const handlePress = () => {
    router.push({
      pathname: "/quiz/[id]",
      params: { id },
    });
  };

  const themeColor = theme.colors.alert;

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.cardContainer, pressed && styles.pressed]}
    >
      <LinearGradient
        colors={[theme.colors.accent, theme.colors.darkAccent]}
        style={styles.gradient}
      >
        <View
          style={[styles.iconWrapper, { backgroundColor: `${themeColor}55` }]}
        >
          <Image
            source={require("../../images/cookie-with-book.png")}
            style={{ width: 80, height: 80, alignSelf: "center" }}
          />
        </View>

        <View style={[styles.dateBadge, { backgroundColor: themeColor }]}>
          <Text style={styles.dateText}>{date}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
