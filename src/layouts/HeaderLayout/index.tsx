// HeaderLayout.tsx
import { type PropsWithChildren, ReactNode, forwardRef } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../styles/theme/themeProvider";

import createStyles from "./styles";

type Props = {
  title?: string;
  topElement?: ReactNode;
  isScroll?: boolean;
} & PropsWithChildren;

const HeaderLayout = forwardRef<ScrollView, Props>(
  ({ title, topElement, isScroll = true, children }, ref) => {
    const theme = useTheme();
    const cs = createStyles(theme);

    return (
      <SafeAreaView
        style={{
          flex: 1,
          //   backgroundColor: theme.colors.primary,
          width: "100%",
        }}
      >
        <View style={cs.header}>
          <Image
            source={require("../../../assets/icons/achivement.png")}
            style={cs.icon}
          />
          {title && <Text style={cs.title}>{title}</Text>}
          <Image
            source={require("../../../assets/icons/notofication.png")}
            style={cs.icon}
          />
        </View>

        {topElement && <View>{topElement}</View>}

        {isScroll ? (
          <ScrollView
            ref={ref}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            bounces
          >
            {children}
          </ScrollView>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </SafeAreaView>
    );
  },
);

HeaderLayout.displayName = "HeaderLayout";
export default HeaderLayout;
