import { useEffect } from "react";

import { useQuizzesContext } from "../context/QuizzesContext";

export const useQuizzesByLevel = (levelId: string | null) => {
  const { quizzes, loading, error, fetchQuizzesByLevel } = useQuizzesContext();

  useEffect(() => {
    if (!levelId) return;
    fetchQuizzesByLevel(levelId);
  }, [levelId, fetchQuizzesByLevel]);

  return { quizzes, loading, error };
};
