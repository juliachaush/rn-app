// src/store/slices/userLevelResultsSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LevelResult {
  quizId: string;
  level: number;
  score: number;
  date: string;
}

interface UserLevelResultsState {
  results: LevelResult[];
}

const initialState: UserLevelResultsState = {
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
  },
});

export const { addLevelResult, clearLevelResults, updateLevelResult } =
  userLevelResultsSlice.actions;
export default userLevelResultsSlice.reducer;
