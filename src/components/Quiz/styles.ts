import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      marginBottom: 16,
      borderRadius: 20,
      overflow: "hidden",
    },
    pressed: {
      transform: [{ scale: 0.97 }],
    },
    gradient: {
      padding: 16,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    image: {
      width: 64,
      height: 64,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.colors.accent,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      color: theme.colors.text,
      fontSize: 18,
      fontWeight: "bold",
    },
    description: {
      color: theme.colors.tabIconSelected,
      fontSize: 14,
      marginTop: 4,
    },
  });

export default createStyles;
