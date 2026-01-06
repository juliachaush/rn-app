import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import { LocalImage } from "../../components/atoms/Image/LocalImage";
import { useTheme } from "../../theme/themeProvider";

import { ASSETS } from "../../../assets";
import createStyles from "./styles";

export function QuizPlayScreen() {
  const route = useRoute<any>();
  const { id } = route.params;

  const theme = useTheme();
  const cs = createStyles(theme);

  return (
    <View style={cs.container}>
      <LocalImage
        source={ASSETS.images.cookie}
        style={cs.quizImg}
        width={100}
        height={100}
      />
      <Text style={cs.category}>Quiz id: {id}</Text>
      <Text style={cs.question}>Question would be here...</Text>
    </View>
  );
}
