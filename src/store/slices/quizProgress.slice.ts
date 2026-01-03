import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AnswerStatus = "correct" | "incorrect" | null;

export interface QuizProgressState {
  currentLevelId: string | null;
  completedQuizzes: string[];
  answers: Record<string, Record<string, AnswerStatus>>;
  userPrizes: string[];
}

const initialState: QuizProgressState = {
  currentLevelId: null,
  completedQuizzes: [],
  // quiz id { id: "correct" : "incorrect" }
  answers: {},
  userPrizes: [],
};

const quizProgressSlice = createSlice({
  name: "quizProgress",
  initialState,
  reducers: {
    setCurrentLevel: (state, action: PayloadAction<string>) => {
      state.currentLevelId = action.payload;
      state.completedQuizzes = [];
      state.answers = {};
    },
    completeQuiz: (state, action: PayloadAction<string>) => {
      const quizId = action.payload;

      if (!state.completedQuizzes.includes(quizId)) {
        state.completedQuizzes = [...state.completedQuizzes, quizId];
      }
    },
    recordAnswer: (
      state,
      action: PayloadAction<{
        quizId: string;
        questionId: string;
        isCorrect: boolean;
      }>,
    ) => {
      const { quizId, questionId, isCorrect } = action.payload;
      if (!state.answers[quizId]) {
        state.answers[quizId] = {};
      }
      state.answers[quizId][questionId] = isCorrect ? "correct" : "incorrect";
    },
    resetProgress: (state) => {
      state.completedQuizzes = [];
      state.answers = {};
      state.currentLevelId = null;
    },
    setUserPrizes: (state, action: PayloadAction<string>) => {
      state.userPrizes.push(action.payload);
    },
  },
});

export const { setCurrentLevel, completeQuiz, recordAnswer, resetProgress } =
  quizProgressSlice.actions;

export default quizProgressSlice.reducer;
