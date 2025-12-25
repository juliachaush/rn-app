import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "../../styles";

import createStyles from "./styles";

export function QuizPlayScreen() {
  const route = useRoute<any>();
  const { quizId } = route.params;

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/cookie.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text style={styles.category}>Quiz id: {quizId}</Text>
      <Text style={styles.question}>Вопрос будет здесь…</Text>
    </View>
  );
}
