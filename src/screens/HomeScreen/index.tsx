import React from "react";
import { View } from "react-native";

import { BigActionCard, MenuCard } from "../../components/index";
import { useTheme } from "../../styles";

import createStyles from "./styles";

export function HomeScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const date = new Date();
  const longDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date);

  return (
    <View style={styles.container}>
      {["1"].map((id) => (
        <View key={id}>
          <MenuCard
            id={id}
            title="Check your quiz for today"
            subtitle="Update your knowledge"
            cardColor={theme.colors.warning}
            isImage={true}
          />

          <BigActionCard
            id={"1"}
            date={longDate}
            title="Attempt the call"
            subtitle="Have fun with colleagues to learn React Native"
          />
        </View>
      ))}
    </View>
  );
}
