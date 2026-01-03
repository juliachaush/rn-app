import { ReactNode } from "react";
import { useLoadLevel } from "../../hooks/useLoadLevel";
import { QuizzesContext } from "./QuizzesContext";

export const QuizzesProvider = ({ children }: { children: ReactNode }) => {
  const value = useLoadLevel();

  return (
    <QuizzesContext.Provider value={value}>{children}</QuizzesContext.Provider>
  );
};
