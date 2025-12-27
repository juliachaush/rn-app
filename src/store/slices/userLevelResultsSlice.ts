// src/store/slices/userLevelResultsSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LevelResult {
  quizId: string;
  level: number;
  score: number;
  date: string;
}

interface UserLevelResultsState {
  currentLevel: string;
  results: LevelResult[];
}

const initialState: UserLevelResultsState = {
  currentLevel: "",
  results: [],
};

const userLevelResultsSlice = createSlice({
  name: "userLevelResults",
  initialState,
  reducers: {
    addLevelResult(state, action: PayloadAction<LevelResult>) {
      state.results.push(action.payload);
    },
    clearLevelResults(state) {
      state.results = [];
    },
    updateLevelResult(state, action: PayloadAction<LevelResult>) {
      const index = state.results.findIndex(
        (r) =>
          r.quizId === action.payload.quizId &&
          r.level === action.payload.level,
      );
      if (index !== -1) {
        state.results[index] = action.payload;
      } else {
        state.results.push(action.payload);
      }
    },
    updateCurrentLevel(state, action: PayloadAction<string>) {
      state.currentLevel = action.payload;
    },
  },
});

export const {
  addLevelResult,
  clearLevelResults,
  updateLevelResult,
  updateCurrentLevel,
} = userLevelResultsSlice.actions;
export default userLevelResultsSlice.reducer;
