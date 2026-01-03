import { useCallback, useState } from "react";
import { QuestionData, QuizData } from "../types/quiz";
import { getQuestionsByQuizId } from "../utils/getQuestionsById";

type UseQuizPlayParams = {
  quizzes: QuizData[] | null;
  quizId: string | undefined;
};

type UseQuizPlayResult = {
  questions: QuestionData[];
  currentQuestion: QuestionData | null;
  currentIndex: number;
  totalQuestions: number;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToQuestion: (index: number) => void;
  reset: () => void;
};

export const useQuizPlay = ({
  quizzes,
  quizId,
}: UseQuizPlayParams): UseQuizPlayResult => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const completedQuizzes = useSelector(selectCompletedQuizzes);
  const questions: QuestionData[] = getQuestionsByQuizId(quizzes, quizId);

  const totalQuestions = questions.length;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const currentQuestion = questions[currentIndex] ?? null;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalQuestions - 1 ? prev + 1 : prev));
  }, [totalQuestions]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalQuestions) {
        setCurrentIndex(index);
      }
    },
    [totalQuestions],
  );

  const reset = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  return {
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    isLastQuestion,
    isFirstQuestion,
    goToNext,
    goToPrevious,
    goToQuestion,
    reset,
  };
};
