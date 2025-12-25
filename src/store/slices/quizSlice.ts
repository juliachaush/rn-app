import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface QuizState {
  quizzes: Quiz[];
  selectedQuizId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  quizzes: [],
  selectedQuizId: null,
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.quizzes = action.payload;
    },
    selectQuiz(state, action: PayloadAction<string>) {
      state.selectedQuizId = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    addQuiz(state, action: PayloadAction<Quiz>) {
      state.quizzes.push(action.payload);
    },
    updateQuiz(state, action: PayloadAction<Quiz>) {
      const index = state.quizzes.findIndex((q) => q.id === action.payload.id);
      if (index !== -1) {
        state.quizzes[index] = action.payload;
      }
    },
  },
});

export const {
  setQuizzes,
  selectQuiz,
  setLoading,
  setError,
  addQuiz,
  updateQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
