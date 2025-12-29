import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { ReactNode } from "react";
import { Pressable, Text, TextStyle, View } from "react-native";

import { useTheme } from "../../../theme/themeProvider";

import createStyles from "./styles";

type BackNavHeaderProps = {
  title?: string;
  titleStyle?: TextStyle;
  rightElement?: ReactNode;
  hasBackButton?: boolean;
};

export default function BackNavHeader({
  title,
  rightElement,
  hasBackButton = true,
}: BackNavHeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();
  const cs = createStyles(theme);

  if (!hasBackButton) {
    return (
      <View style={cs.container}>
        <Text style={cs.text}>{title}</Text>
        <View>{rightElement}</View>
      </View>
    );
  }

  return (
    <View style={cs.container}>
      <Pressable onPress={navigation.goBack}>
        <Ionicons name={"chevron-back"} size={22} color={"white"} />
      </Pressable>
      <Text style={cs.text}>{title}</Text>
      <View>{rightElement}</View>
    </View>
  );
}

BackNavHeader.displayName = "BackNavHeader";
