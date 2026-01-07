import { QUIZZES_PATH } from "../lib/consts/routes";
import { apiFetch } from "../services/api/api";
import { LevelData } from "../types/quiz";

export const useQuizzes = () => {
  const fetchByLevel = (levelId: string): Promise<LevelData[]> => {
    return apiFetch(`${QUIZZES_PATH}/${levelId}`);
  };

  return { fetchByLevel };
};
