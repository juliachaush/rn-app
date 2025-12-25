import { StyleSheet } from "react-native";

import { Theme } from "../../styles/theme/theme";

const styles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.shadow,
      padding: 16,
      borderRadius: 12,
      marginVertical: 16,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
      borderWidth: 2,
      borderColor: "#ffffffff",
    },
    pressed: {
      backgroundColor: theme.colors.background,
      opacity: 0.9,
    },
    leftContent: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    iconContainer: {
      marginRight: 12,
      backgroundColor: theme.colors.background,
      padding: 8,
      borderRadius: 8,
    },
    textContainer: {
      marginLeft: 24,
    },
    title: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.background,
    },
    subtitle: {
      fontSize: 13,
      color: theme.colors.background,
      marginTop: 2,
    },
    iconColor: {
      color: theme.colors.surface,
    },
  });

export default styles;
