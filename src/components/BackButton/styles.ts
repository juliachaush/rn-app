import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 4,
    },
    text: { color: theme.colors.primary, fontWeight: "700", fontSize: 16 },
  });

export default createStyles;
