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
    const styles = createStyles(theme);

    return (
      <SafeAreaView
        style={{
          flex: 1,
          //   backgroundColor: theme.colors.primary,
          width: "100%",
        }}
      >
        <View style={styles.header}>
          <Image
            source={require("../../icons/achivement.png")}
            style={styles.icon}
          />
          {title && <Text style={styles.title}>{title}</Text>}
          <Image
            source={require("../../icons/notofication.png")}
            style={styles.icon}
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
