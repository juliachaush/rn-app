import { useCallback, useRef, useState } from "react";
import { useQuizzes } from "../hooks/useQuizzes";
import { LevelData } from "../types/quiz";

export const useLoadLevel = () => {
  const { fetchByLevel } = useQuizzes();
  const lastLevelId = useRef<string | null>(null);

  const [currentQuizzes, setCurrentQuizzes] = useState<LevelData[]>([]);
  const [currentLoading, setCurrentLoading] = useState(false);
  const [currentError, setCurrentError] = useState<string | null>(null);

  const loadLevel = useCallback(
    async (levelId: string) => {
      if (lastLevelId.current === levelId) return;
      lastLevelId.current = levelId;

      setCurrentLoading(true);
      setCurrentError(null);

      try {
        const data = await fetchByLevel(levelId);
        setCurrentQuizzes(data);
      } catch (e) {
        setCurrentError(e instanceof Error ? e.message : "Unknown error");
        setCurrentQuizzes([]);
      } finally {
        setCurrentLoading(false);
      }
    },
    [fetchByLevel],
  );

  return {
    currentQuizzes,
    currentLoading,
    currentError,
    loadLevel,
  };
};
