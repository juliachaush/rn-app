import { Request, Response, Router } from "express";

import levels from "../data/levelPreview.json";

const router = Router();

router.get("/levels", (_req: Request, res: Response) => {
  res.status(200).json(levels);
});

export default router;
