import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { Theme } from "../src/theme/theme";
import { useTheme } from "../src/theme/themeProvider";

export default function GlobalLoading() {
  const theme = useTheme();
  const cs = styles(theme);

  return (
    <View style={cs.container}>
      <ActivityIndicator size="large" color={theme.colors.accent} />
      <Text style={cs.text}>Loading...</Text>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.text,
    },

    text: {
      marginTop: 16,
      fontSize: 16,
      color: theme.colors.darkAccent,
    },
  });
