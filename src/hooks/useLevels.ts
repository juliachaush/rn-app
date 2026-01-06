import { useEffect, useState } from "react";

import { LEVEL_PATH } from "../consts/routes";
import { apiFetch } from "../services/api/api";
import { LevelPreview } from "../types/quiz";

type State = {
  data: LevelPreview[] | [];
  loading: boolean;
  error: string | null;
};

export function useLevels() {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    const fetchLevels = async () => {
      setState((s) => ({ ...s, loading: true, error: null }));

      try {
        const data = await apiFetch<LevelPreview[]>(LEVEL_PATH);

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
            data: [],
            loading: false,
            error: e instanceof Error ? e.message : "Unknown error",
          });
        }
      }
    };

    fetchLevels();

    return () => {
      active = false;
    };
  }, []);

  return state;
}
