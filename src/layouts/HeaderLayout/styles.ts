import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1, width: "100%" },
    header: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: theme.colors.surface,
    },
    title: {
      color: theme.colors.onPrimary,
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      flex: 1,
    },
    icon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
      paddingRight: 12,
    },
  });

export default createStyles;
