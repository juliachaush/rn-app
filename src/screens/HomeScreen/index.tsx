import React from "react";
import { View } from "react-native";

import { BigActionCard } from "../../components/CardWithCentredIcon";
import { MenuCard } from "../../components/CardWithRightArrow";
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
          <MenuCard
            id={id}
            title="Check your quiz for today"
            subtitle="Update your knowledge"
            cardColor={theme.colors.warning}
            isImage={true}
          />
        </View>
      ))}
      <BigActionCard
        id={"1"}
        date={longDate}
        title="Attempt the call"
        subtitle="Have fun with colleagues to learn React Native"
      />
    </View>
  );
}
