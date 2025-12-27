import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";

import { store } from "../src/store";
import { getNavigationTheme } from "../src/styles/theme/navigationTheme";
import { AppThemeProvider, useTheme } from "../src/styles/theme/themeProvider";

export const unstable_settings = {
  anchor: "(tabs)",
};

function NavigationLayout() {
  const theme = useTheme();
  const navigationTheme = getNavigationTheme(theme);

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <NavigationLayout />
      </AppThemeProvider>
    </Provider>
  );
}
