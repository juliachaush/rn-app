import { useMemo } from "react";

import { LevelData } from "../types/quiz";

import { useQuizzesByLevel } from "./useQuizzesByLevel";

export const useLevelQuizzes = (levelId: string | null) => {
  const { quizzes, loading, error } = useQuizzesByLevel(levelId);

  const levelQuizzes: LevelData[] = useMemo(() => {
    if (!quizzes?.length) return [];
    return quizzes[0].quizzes.flat();
  }, [quizzes]);

  return { levelQuizzes, loading, error };
};
