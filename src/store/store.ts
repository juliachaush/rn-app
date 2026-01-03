import { configureStore } from "@reduxjs/toolkit";

import quizProgressSlice from "./slices/quizProgress.slice";

export const store = configureStore({
  reducer: {
    quizProgress: quizProgressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
