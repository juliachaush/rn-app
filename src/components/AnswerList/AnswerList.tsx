import React from "react";
import { View } from "react-native";

import { QuestionData } from "../../types/quiz";
import { Answer } from "../AnswerOption/AnswerOption";

type AnswerListProps = {
  question: QuestionData;
  onNext: () => void;
};

export const AnswerList = ({ question, onNext }: AnswerListProps) => {
  return (
    <View>
      {question.options.map((option, index) => (
        <Answer
          key={index}
          text={option}
          isCorrect={index === question.correctOptionIndex}
          onPress={onNext}
        />
      ))}
    </View>
  );
};
