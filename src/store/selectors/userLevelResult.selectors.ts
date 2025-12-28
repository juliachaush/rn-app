import { RootState } from "../store";

export const selectUserLevelResultsState = (state: RootState) =>
  state.userLevelResults;

export const selectCurrentLevel = (state: RootState) =>
  state.userLevelResults.currentLevel;

export const selectLevelResults = (state: RootState) =>
  state.userLevelResults.results;

export const selectResultsByLevel = (level: number) => (state: RootState) =>
  state.userLevelResults.results.filter((result) => result.level === level);

export const selectResultByQuizAndLevel =
  (quizId: string, level: number) => (state: RootState) =>
    state.userLevelResults.results.find(
      (result) => result.quizId === quizId && result.level === level,
    );

export const selectTotalScoreByLevel = (level: number) => (state: RootState) =>
  state.userLevelResults.results
    .filter((r) => r.level === level)
    .reduce((sum, r) => sum + r.score, 0);
