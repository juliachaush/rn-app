import { createContext, useContext } from "react";

import { Theme, darkTheme } from "./theme";

const ThemeContext = createContext<Theme>(darkTheme);

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const scheme = useColorScheme();
  // const theme = scheme === "dark" ? darkTheme : lightTheme;
  const theme = darkTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
