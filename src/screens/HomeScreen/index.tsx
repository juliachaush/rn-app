import React from "react";
import { View } from "react-native";

import { CenteredIconCard } from "../../components/molecules/CenteredIconCard";
import { NavigationCard } from "../../components/molecules/NavigationCard";
import { useTheme } from "../../theme/themeProvider";
import { getDate } from "../../utils/getDate";

import createStyles from "./styles";

export function HomeScreen() {
  const theme = useTheme();
  const cs = createStyles(theme);

  const longDate = getDate();

  // screen in progress
  return (
    <View style={cs.container}>
      {["1"].map((id) => (
        <View key={id}>
          <NavigationCard
            id={id}
            title="Check your quiz for today"
            subtitle="Update your knowledge"
            cardColor={theme.colors.warning}
            isImage={true}
          />
        </View>
      ))}
      <CenteredIconCard
        id={"1"}
        date={longDate}
        title="Attempt the call"
        subtitle="Have fun with colleagues to learn React Native"
      />
    </View>
  );
}
