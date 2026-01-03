import { createContext } from "react";
import { LevelData } from "../../types/quiz";

export type QuizzesStore = {
  loadLevel: (levelId: string) => Promise<void>;
  currentQuizzes: LevelData[] | [];
  currentLoading: boolean | null;
  currentError: string | null;
};

export const QuizzesContext = createContext<QuizzesStore | null>(null);
