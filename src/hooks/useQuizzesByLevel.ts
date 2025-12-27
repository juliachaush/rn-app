// src/hooks/useQuizzesByLevel.ts
import { useEffect, useState } from "react";

import { apiFetch } from "../services/api/api";
import { QuizzesData } from "../types/quiz";

type State = {
  data: QuizzesData[] | null;
  loading: boolean;
  error: string | null;
};

export function useQuizzesByLevel(levelId: string | null) {
  const [state, setState] = useState<State>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!levelId) return;

    let active = true;

    const fetchQuizzes = async () => {
      setState((s) => ({ ...s, loading: true, error: null }));

      try {
        const data = await apiFetch<QuizzesData[]>(`/quizzes/${levelId}`);

        if (active) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      } catch (e) {
        if (active) {
          setState({
            data: null,
            loading: false,
            error: e instanceof Error ? e.message : "Unknown error",
          });
        }
      }
    };

    fetchQuizzes();

    return () => {
      active = false;
    };
  }, [levelId]);

  return state;
}
