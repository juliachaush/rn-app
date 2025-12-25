import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./slices/quizSlice";
import userLevelResultsReducer from "./slices/userLevelResultsSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    userLevelResults: userLevelResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
