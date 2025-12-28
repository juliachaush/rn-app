import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "../../theme/themeProvider";

import createStyles from "./styles";

export function QuizPlayScreen() {
  const route = useRoute<any>();
  const { id } = route.params;

  const theme = useTheme();
  const cs = createStyles(theme);

  return (
    <View style={cs.container}>
      <Image
        source={require("../../../assets/images/cookie.png")}
        style={cs.quizImg}
      />
      <Text style={cs.category}>Quiz id: {id}</Text>
      <Text style={cs.question}>Question would be here...</Text>
    </View>
  );
}
