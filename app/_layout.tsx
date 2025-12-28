import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";

import { QuizzesProvider } from "../src/context/QuizzesContext";
import { store } from "../src/store/store";
import { getNavigationTheme } from "../src/theme/navigationTheme";
import { AppThemeProvider, useTheme } from "../src/theme/themeProvider";

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
        <QuizzesProvider>
          <NavigationLayout />
        </QuizzesProvider>
      </AppThemeProvider>
    </Provider>
  );
}
