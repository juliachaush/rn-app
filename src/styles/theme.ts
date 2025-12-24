import { Platform } from "react-native";

const learningGreen = "#1DB954";
const darkgGreen = "#072e14ff";
// const learningPurpur = "#b91d1dff";
const learningBlack = "#191414";
const learningDarkGray = "#121212";
const learningGray = "#b3b3b3";
const learningWhite = "#ffffff";

export const colors = {
  light: {
    text: "#11181C",
    background: learningWhite,
    tint: learningGreen,
    icon: learningGray,
    tabIconDefault: learningGray,
    tabIconSelected: learningGreen,
    accent: learningGreen,
    surface: "#F6F6F6",
    darkAccent: darkgGreen,
  },
  dark: {
    text: learningWhite,
    background: learningDarkGray,
    tint: learningGreen,
    icon: learningGray,
    tabIconDefault: learningGray,
    tabIconSelected: learningGreen,
    accent: learningGreen,
    surface: learningBlack,
    darkAccent: darkgGreen,
  },
};

export const fornts = Platform.select({
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
});
