import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../../theme/themeProvider";

type AnswerProps = {
  text: string;
  isCorrect: boolean;
  onPress: () => void;
};

export const Answer = ({ text, isCorrect, onPress }: AnswerProps) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
      onPress();
    }, 500);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          marginVertical: 12,
          borderRadius: 8,
          backgroundColor: selected
            ? isCorrect
              ? theme.colors.success
              : theme.colors.warning
            : theme.colors.shadow,
          padding: 24,
        }}
      >
        <Text
          style={{ color: theme.colors.text, fontSize: theme.fontSizes.sm }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
