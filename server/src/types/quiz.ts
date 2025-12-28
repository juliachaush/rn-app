export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
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

export type QuestionData = {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
};

export type LevelData = {
  id: string;
  levelId: string;
  title: string;
  difficulty: Difficulty;
  gift: QuizReward;

  quizzes: {
    id: string;
    title: string;
    image: string;
    questions: QuestionData[];
  }[];
};

export type QuizzesData = {
  quizzes: LevelData[];
};

export type LevelPosition = {
  x: number;
  y: number;
};

export type LevelPreview = {
  id: string;
  title: string;
  imageUrl: string;
  enabled: boolean;
  position: LevelPosition;
};
