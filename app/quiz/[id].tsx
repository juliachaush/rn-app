import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { loadQuestions } from "../../src/utils/loadQuestions";
import questions from "../../src/utils/questionsData.json";

export interface Question {
  category: string;
  question: string;
  answers: string[];
  correct: number;
}

export default function QuizPlayScreen() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(questions);
  const [loading, setLoading] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadQuestions();
        setQuizQuestions(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading questions...</Text>
      </View>
    );
  }

  const question = quizQuestions[current];

  const selectAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      setSelected(null);
      setCurrent((prev) => prev + 1);
    }, 600);
  };

  if (!question) {
    return (
      <View style={styles.center}>
        <Text style={styles.finish}>Quiz completed!</Text>
        <Text style={styles.finish}>Cookie for you!</Text>
        <Image
          source={require("../../src/images/cookie.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../src/images/cookie.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text style={styles.category}>{question.category}</Text>
      <Text style={styles.question}>
        {current + 1}. {question.question}
      </Text>

      {question.answers.map((answer, index) => {
        const isCorrect = selected === index && index === question.correct;
        const isWrong = selected === index && index !== question.correct;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerBtn,
              isCorrect && styles.correct,
              isWrong && styles.wrong,
            ]}
            onPress={() => selectAnswer(index)}
          >
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#121212", // темний фон Spotify
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },

  category: {
    color: "#1DB954", // зелений акцент Spotify
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  question: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 24,
    color: "#FFFFFF", // білий текст
  },

  answerBtn: {
    padding: 18,
    backgroundColor: "#181818", // картка як у плейлистах
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#282828",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },

  answerText: {
    fontSize: 17,
    color: "#EDEDED", // світлий текст
    fontWeight: "500",
  },

  correct: {
    backgroundColor: "#1DB954", // Spotify green
    borderColor: "#1ED760",
  },

  wrong: {
    backgroundColor: "#E91429", // червоний Spotify (коли недоступно)
    borderColor: "#ff4f5e",
  },

  finish: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1DB954",
  },
});
