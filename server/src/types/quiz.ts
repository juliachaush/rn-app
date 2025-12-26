export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export type Level = {
  id: number;
  title: string;
  difficulty: Difficulty;
  questions: Question[];
};

export type QuizReward = {
  title: string;
  image: string;
  description: string;
};

export type Quiz = {
  id: string;
  title: string;
  description?: string;
  levelId: number;
  reward: QuizReward;
  questions: Question[];
};

export type QuizResult = {
  quizId: string;
  levelId: number;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: string;
};

export type LevelPreview = {
  id: number;
  title: string;
};

export type QuestionData = {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
};

export type QuizData = {
  id: string;
  levelId: string;
  title: string;
  difficulty: string;
  gift: {
    title: string;
    image: string;
    description: string;
  };
  questions: QuestionData[];
};

export type QuizzesData = {
  quizzes: QuizData[];
};
