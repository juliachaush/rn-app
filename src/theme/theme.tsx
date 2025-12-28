import { Platform } from "react-native";

/* ===== Base colors ===== */
const learningGreen = "#1DB954";
const darkGreen = "#072e14ff";
const learningBlack = "#191414";
const learningDarkGray = "#121212";
const learningGray = "#b3b3b3";
const learningWhite = "#ffffff";

/* ===== Secondary colors ===== */
const warningOrange = "#FF6B35";
const alertYellow = "#FFD23F";
const infoBlue = "#2D9CDB";
const successGreen = "#27AE60";

/* ===== Types ===== */
export type ThemeMode = "light" | "dark";

export type Theme = {
  mode: ThemeMode;

  colors: {
    text: string;
    textSecondary: string;
    background: string;
    surface: string;

    primary: string;
    accent: string;
    darkAccent: string;

    icon: string;
    border: string;
    shadow: string;

    tabIconDefault: string;
    tabIconSelected: string;

    onPrimary: string;

    // Secondary colors
    warning: string;
    alert: string;
    info: string;
    success: string;
  };

  gradients: {
    primary: [string, string, string];
    disabled: [string, string];
    warning: [string, string, string];
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };

  radius: {
    sm: number;
    md: number;
    lg: number;
  };

  fonts: {
    sans: string;
    serif: string;
    rounded: string;
    mono: string;
  };

  fontSizes: { xs: number; sm: number; md: number; lg: number };
};

/* ===== Fonts ===== */
const fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
})!;

/* ===== Light theme ===== */
export const lightTheme: Theme = {
  mode: "light",

  colors: {
    text: "#11181C",
    textSecondary: learningGray,
    background: learningWhite,
    surface: "#F6F6F6",

    primary: learningGreen,
    accent: learningGreen,
    darkAccent: darkGreen,

    icon: learningGray,
    border: "#E5E7EB",
    shadow: "#000000",

    tabIconDefault: learningGray,
    tabIconSelected: learningGreen,

    onPrimary: learningWhite,

    // Secondary colors
    warning: warningOrange,
    alert: alertYellow,
    info: infoBlue,
    success: successGreen,
  },

  gradients: {
    primary: ["#2FE96A", "#1DB954", "#14833B"],
    disabled: ["#3A3A3A", "#2C2C2C"],
    warning: ["#FF6B35", "#e96738ff", "#d9501eff"],
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },

  radius: {
    sm: 8,
    md: 12,
    lg: 24,
  },

  fonts,

  fontSizes: {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
  },
};

/* ===== Dark theme ===== */
export const darkTheme: Theme = {
  ...lightTheme,
  mode: "dark",

  colors: {
    ...lightTheme.colors,
    text: learningWhite,
    background: learningDarkGray,
    surface: learningBlack,
  },
};
