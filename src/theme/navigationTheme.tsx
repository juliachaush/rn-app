import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

import { Theme } from "./theme";

export const getNavigationTheme = (theme: Theme) => {
  const base =
    theme.mode === "dark" ? NavigationDarkTheme : NavigationDarkTheme;

  return {
    ...base,
    colors: {
      ...base.colors,
      background: theme.colors.background,
      card: theme.colors.surface,
      text: theme.colors.text,
      primary: theme.colors.primary,
      border: theme.colors.border,
    },
  };
};
