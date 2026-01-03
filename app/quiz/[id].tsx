import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { AnswerList } from "../../src/components/organisms/AnswerList/AnswerList";
import { useQuizzesContext } from "../../src/context/QuizzesContext/useQuizzesContext";
import { useQuizPlay } from "../../src/hooks/useQuizPlay";
import BackButtonLayout from "../../src/layouts/BackButtonLayout";
import { completeQuiz } from "../../src/store/slices/quizProgress.slice";
import { AppDispatch } from "../../src/store/store";
import { Theme } from "../../src/theme/theme";
import { useTheme } from "../../src/theme/themeProvider";

export default function QuizPlayPage() {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { currentQuizzes, currentLoading, currentError, loadLevel } =
    useQuizzesContext();

  const theme = useTheme();
  const cs = styles(theme);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    isLastQuestion,
    goToNext,
  } = useQuizPlay({ quizzes: currentQuizzes[0].quizzes, quizId: id });

  useEffect(() => {
    if (isLastQuestion && currentQuestion) {
      dispatch(completeQuiz(id));
      navigation.goBack();
    }
  }, [isLastQuestion, currentQuestion]);

  if (!currentQuestion) {
    return (
      <BackButtonLayout title={`Quiz ${id}`}>
        <View style={cs.center}>
          <Text style={cs.emptyText}>There is no questions in this quiz</Text>
        </View>
      </BackButtonLayout>
    );
  }

  return (
    <BackButtonLayout title={`Quiz ${id}`}>
      <View style={cs.container}>
        <Text style={cs.progress}>
          Question {currentIndex + 1} / {totalQuestions}
        </Text>

        <Text style={cs.question}>{currentQuestion.question}</Text>

        <AnswerList question={currentQuestion} onNext={goToNext} />
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
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    progress: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginBottom: 16,
      textAlign: "center",
    },
    question: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.colors.text,
      marginBottom: 32,
      lineHeight: 28,
    },
    loadingText: {
      marginTop: 16,
      fontSize: 16,
      color: theme.colors.text,
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.warning,
      textAlign: "center",
    },
    emptyText: {
      fontSize: 18,
      color: theme.colors.text,
      textAlign: "center",
    },
  });
