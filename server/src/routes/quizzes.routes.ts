import { Request, Response, Router } from "express";

import quizzesData from "../data/quizzes.json";
import { QuizzesData } from "../types/quiz";

const router = Router();
const quizzes = quizzesData as QuizzesData;

router.get("/:levelId", (req: Request, res: Response) => {
  const levelId = req.params.levelId;

  if (Number.isNaN(levelId)) {
    return res.status(400).json({ message: "Invalid levelId" });
  }

  const result = quizzes.quizzes.filter((quiz) => quiz.levelId === levelId);

  res.status(200).json(result);
});

export default router;
