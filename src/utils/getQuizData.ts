import { QuizzesData } from "../types/quiz";

export const quizData = (quizzes: QuizzesData[], id: string) => {
  const realData = quizzes[0].quizzes.find((item) => item.id === id);
  return realData;
};
