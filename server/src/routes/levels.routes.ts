import { Request, Response, Router } from "express";

import { LevelPreview } from "../types/quiz";

const router = Router();

const levels: LevelPreview[] = [
  { id: 1, title: "Beginner" },
  { id: 2, title: "Intermediate" },
  { id: 3, title: "Advanced" },
  { id: 4, title: "Pro" },
];

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json(levels);
});

export default router;
