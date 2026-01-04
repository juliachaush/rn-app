import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    scrollContent: { flex: 1 },
    headerWrap: {
      zIndex: 1,
      padding: 12,
    },
    flexOne: { flex: 1 },
  });

export default createStyles;
