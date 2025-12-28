import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AnswerList } from "../../src/components/AnswerList/AnswerList";
import { useQuizzesContext } from "../../src/context/QuizzesContext";
import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { Theme } from "../../src/theme/theme";
import { useTheme } from "../../src/theme/themeProvider";
import { QuestionData } from "../../src/types/quiz";

export default function QuizPlayPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { quizzes } = useQuizzesContext();
  const theme = useTheme();
  const cs = styles(theme);

  const quizQuestions: QuestionData[] = useMemo(() => {
    if (!quizzes || !id) return [];
    const quiz = quizzes
      .flatMap((lvl) => lvl.quizzes)
      .flat()
      .find((q) => q.id === id);
    return quiz?.questions ?? [];
  }, [quizzes, id]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      prev + 1 < quizQuestions.length ? prev + 1 : prev,
    );
  };

  if (!quizQuestions.length) {
    return (
      <BackButtonLayout title={`Quiz ${id}`}>
        <View style={cs.container}>
          <Text>No questions found</Text>
        </View>
      </BackButtonLayout>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <BackButtonLayout title={`Quiz ${id}`}>
      <View style={cs.container}>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 18,
            fontWeight: "900",
            marginBottom: 24,
          }}
        >
          {currentQuestion.question}
        </Text>
        <AnswerList question={currentQuestion} onNext={handleNext} />
      </View>
    </BackButtonLayout>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
