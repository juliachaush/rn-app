import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { HOME_PAGE } from "../src/lib/consts/routes";
import { Theme } from "../src/theme/theme";
import { useTheme } from "../src/theme/themeProvider";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const theme = useTheme();
  const cs = styles(theme);

  return (
    <View style={cs.container}>
      <Text style={cs.text}>
        Error: {error?.message || "Something went wrong..."}
      </Text>
      <TouchableOpacity onPress={reset} style={cs.button}>
        <Text style={cs.secondaryButtonText}>Try again</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace(HOME_PAGE)}>
        <Text style={cs.primaryButtonText}>Home screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },

    text: {
      fontSize: 18,
      color: "red",
      marginBottom: 20,
      textAlign: "center",
    },

    button: {
      padding: 14,
      backgroundColor: theme.colors.accent,
      borderRadius: 8,
      marginBottom: 12,
    },

    secondaryButtonText: {
      color: "white",
      fontWeight: "600",
    },

    primaryButtonText: {
      color: theme.colors.accent,
    },
  });
