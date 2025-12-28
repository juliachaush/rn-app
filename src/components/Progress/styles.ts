import { StyleSheet } from "react-native";

import { Theme } from "../../theme/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 180,
      borderRadius: 24,
      overflow: "hidden",
    },
    textWrapper: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: 900,
      color: "black",
    },
  });

export default createStyles;
