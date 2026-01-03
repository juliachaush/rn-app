import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCurrentLevelId = (state: RootState) =>
  state.quizProgress.currentLevelId;

export const selectCompletedQuizzes = (state: RootState) =>
  state.quizProgress.completedQuizzes;

const selectAnswersState = (state: RootState) => state.quizProgress.answers;

export const selectAllAnswers = (state: RootState) =>
  state.quizProgress.answers;

export const selectAnswersForQuiz = createSelector(
  [selectAnswersState, (_: RootState, quizId: string | undefined) => quizId],
  (answers, quizId) => (quizId ? answers[quizId] || {} : {}),
);
