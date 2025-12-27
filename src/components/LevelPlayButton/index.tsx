import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Theme } from "../../styles/theme/theme";
import { useTheme } from "../../styles/theme/themeProvider";

type Props = {
  enabled: boolean;
  onPress: () => void;
  x?: number;
  y?: number;
};

export function LevelPlayButton({ enabled, onPress, x = 0, y = 0 }: Props) {
  const theme = useTheme();
  const styles = createStyles(theme, enabled);

  return (
    <Pressable
      disabled={!enabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && enabled && styles.pressed,
        { left: x, top: y, position: "absolute" },
      ]}
    >
      <View style={styles.shadowLayer} />
      <LinearGradient
        colors={enabled ? theme.gradients.warning : theme.gradients.disabled}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.button}
      >
        <View style={styles.highlight} />

        <Ionicons
          name="play"
          size={30}
          color={theme.colors.onPrimary}
          style={{ marginLeft: 3 }}
        />
      </LinearGradient>
    </Pressable>
  );
}

const SIZE = 72;
const DEPTH = 6;

const createStyles = (theme: Theme, enabled: boolean) =>
  StyleSheet.create({
    wrapper: {
      width: SIZE,
      height: SIZE + DEPTH,
      alignItems: "center",
    },

    shadowLayer: {
      position: "absolute",
      top: DEPTH,
      width: SIZE,
      height: SIZE,
      borderRadius: SIZE / 2,
      backgroundColor: enabled ? theme.colors.primary : theme.colors.accent,
      opacity: 0.9,
    },

    button: {
      width: SIZE,
      height: SIZE,
      borderRadius: SIZE / 2,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },

    highlight: {
      position: "absolute",
      top: 6,
      left: 10,
      width: SIZE - 20,
      height: SIZE / 2,
      borderRadius: SIZE,
      backgroundColor: "rgba(255,255,255,0.25)",
    },

    pressed: {
      transform: [{ translateY: DEPTH }],
    },
  });
