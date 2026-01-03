import { useContext } from "react";
import { QuizzesContext } from "./QuizzesContext";

export const useQuizzesContext = () => {
  const ctx = useContext(QuizzesContext);
  if (!ctx) {
    throw new Error("useQuizzesStore must be used inside QuizzesProvider");
  }
  return ctx;
};
