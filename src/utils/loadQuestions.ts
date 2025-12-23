export const loadQuestions = async () => {
  const url = "https://juliachaush.github.io/rn-quiz-data/questions.json";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
};
