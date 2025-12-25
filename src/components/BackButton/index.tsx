import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { ReactNode } from "react";
import { Pressable, Text, TextStyle, View } from "react-native";

import { IconSymbol } from "../Icon";

type Props = {
  title?: string;
  titleStyle?: TextStyle;
  rightElement?: ReactNode;
  hasBackButton?: boolean;
};

export default function BackButton({
  title,
  titleStyle,
  rightElement,
  hasBackButton = true,
}: Props) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View>
      <Pressable onPress={navigation.goBack}>
        <IconSymbol
          style={{ color: "white" }}
          name={"chevron.left.forwardslash.chevron.right"}
        />
      </Pressable>
      <Text style={{ color: "white" }}>MOMO</Text>
      <View>{rightElement}</View>
    </View>
  );
}

BackButton.displayName = "BackButton";
