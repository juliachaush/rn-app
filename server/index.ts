import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import levelsRouter from "./src/routes/levels.routes";
import quizRouter from "./src/routes/quiz.routes";
import quizzesRouter from "./src/routes/quizzes.routes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;
const localIp = process.env.LOCAL_IP || "0.0.0.0";

app.use(cors());
app.use(express.json());

app.use("/api", levelsRouter);
app.use("/api", quizzesRouter);
app.use("/api", quizRouter);

app.get("/", (_req, res) => {
  res.send("Server is running!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://${localIp}:${port}`);
});
