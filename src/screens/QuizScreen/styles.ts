import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 60,
      backgroundColor: theme.colors.background,
    },
    category: {
      color: theme.colors.accent,
      fontWeight: "700",
    },
    question: {
      color: theme.colors.text,
      fontSize: 20,
      fontWeight: "800",
    },
    quizImg: { width: 100, height: 100, alignSelf: "center" },
  });

export default createStyles;
