import { QuestionData, QuizData } from "../types/quiz";

export const getQuestionsByQuizId = (
  quizzes: QuizData[] | null,
  quizId: string | undefined,
): QuestionData[] => {
  if (!quizzes || !quizId) return [];

  const foundQuiz = quizzes.find((subQuiz) => subQuiz.id === quizId);

  return foundQuiz?.questions ?? [];
};
