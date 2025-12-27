import { Request, Response, Router } from "express";

import quizzes from "../data/quizzes.json";
import { QuizzesData } from "../types/quiz";

const router = Router();
const quizzesData = quizzes as QuizzesData;

router.get("/quizzes", (req: Request, res: Response) => {
  const levelId = req.params.levelId;

  if (!levelId) {
    return res.status(400).json({ message: "levelId is required" });
  }

  const result = quizzesData.quizzes.filter((quiz) => quiz.levelId === levelId);

  res.status(200).json(result);
});

export default router;
