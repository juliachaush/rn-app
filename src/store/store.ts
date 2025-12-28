import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./slices/quiz.slice";
import userLevelResultsReducer from "./slices/userLevelResults.slice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    userLevelResults: userLevelResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
