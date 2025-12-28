import React, { ReactNode, createContext, useContext, useState } from "react";

import { apiFetch } from "../services/api/api";
import { QuizzesData } from "../types/quiz";

type QuizzesCache = {
  [levelId: string]: QuizzesData[];
};

type QuizzesState = {
  quizzes: QuizzesData[] | null;
  loading: boolean;
  error: string | null;
  fetchQuizzesByLevel: (levelId: string) => Promise<void>;
};

const QuizzesContext = createContext<QuizzesState | undefined>(undefined);

export const QuizzesProvider = ({ children }: { children: ReactNode }) => {
  const [quizzes, setQuizzes] = useState<QuizzesData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastLevelId, setLastLevelId] = useState<string | null>(null);
  const [cache, setCache] = useState<QuizzesCache>({});

  const fetchQuizzesByLevel = async (levelId: string) => {
    if (levelId === lastLevelId && quizzes) return;
    if (cache[levelId]) {
      setQuizzes(cache[levelId]);
      setLastLevelId(levelId);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await apiFetch<QuizzesData[]>(`/quizzes/${levelId}`);
      setQuizzes(data);
      setCache((prev) => ({ ...prev, [levelId]: data }));
      setLastLevelId(levelId);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setQuizzes(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuizzesContext.Provider
      value={{ quizzes, loading, error, fetchQuizzesByLevel }}
    >
      {children}
    </QuizzesContext.Provider>
  );
};

export const useQuizzesContext = () => {
  const context = useContext(QuizzesContext);
  if (!context) {
    throw new Error("useQuizzesContext must be used within a QuizzesProvider");
  }
  return context;
};
