import { StyleSheet } from "react-native";

import { Theme } from "../../styles";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 16,
      paddingTop: 24,
      backgroundColor: theme.colors.background,
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.accent,
      marginBottom: 10,
      marginTop: 24,
      fontWeight: "900",
      fontSize: 16,
      textTransform: "uppercase",
      letterSpacing: 0.8,
      textAlign: "center",
    },
  });

export default createStyles;
