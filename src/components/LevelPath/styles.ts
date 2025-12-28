import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { position: "absolute", left: 0, top: 0, pointerEvents: "none" },
  });

export default createStyles;
