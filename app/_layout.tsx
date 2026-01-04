import { ThemeProvider } from "@react-navigation/native";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { QuizzesProvider } from "../src/context/QuizzesContext/QuizzesProvider";
import { store } from "../src/store/store";
import { getNavigationTheme } from "../src/theme/navigationTheme";
import { AppThemeProvider, useTheme } from "../src/theme/themeProvider";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

function RootNavigation() {
  const theme = useTheme();
  const navigationTheme = getNavigationTheme(theme);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <ThemeProvider value={navigationTheme}>
          <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

          <Slot />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <QuizzesProvider>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </QuizzesProvider>
      </AppThemeProvider>
    </Provider>
  );
}
