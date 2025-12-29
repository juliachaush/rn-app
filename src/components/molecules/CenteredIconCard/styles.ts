import { StyleSheet } from "react-native";

import { Theme } from "../../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      borderRadius: 20,
      overflow: "hidden",
      justifyContent: "center",
    },
    pressed: {
      transform: [{ scale: 0.98 }],
      opacity: 0.9,
    },
    gradient: {
      padding: 16,
      borderRadius: 20,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5,
      borderWidth: 2,
      borderColor: theme.colors.border,
      alignItems: "center",
    },
    iconWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    dateBadge: {
      paddingHorizontal: 14,
      paddingVertical: 4,
      borderRadius: 20,
      marginBottom: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    dateText: {
      color: theme.colors.shadow,
      fontSize: 12,
      fontWeight: "700",
      textTransform: "uppercase",
      textAlign: "center",
    },
    textContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 22,
      fontWeight: "800",
      color: "#fff",
      textAlign: "center",
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 15,
      color: "#fff",
      textAlign: "center",
      lineHeight: 20,
      paddingHorizontal: 10,
    },
    cardImg: { width: 80, height: 80, alignSelf: "center" },
  });

export default createStyles;
