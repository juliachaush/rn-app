import { type PropsWithChildren, forwardRef, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButtonHeader from "../../components/molecules/BackButtonHeader";

import { useTheme } from "../../theme/themeProvider";

import createStyles from "./styles";

type BackButtonLayoutProps = {
  title?: string;
  isScroll?: boolean;
} & PropsWithChildren;

const BackButtonLayout = forwardRef<ScrollView, BackButtonLayoutProps>(
  ({ title, isScroll = true, children }, ref) => {
    const theme = useTheme();
    const cs = useMemo(() => createStyles(theme), [theme]);

    const Content = isScroll ? ScrollView : View;

    return (
      <SafeAreaView style={cs.container}>
        <View style={cs.headerWrap}>
          <BackButtonHeader title={title} />
        </View>
        <Content
          ref={isScroll ? ref : undefined}
          style={cs.container}
          {...(isScroll && {
            keyboardShouldPersistTaps: "handled",
            showsVerticalScrollIndicator: false,
            contentContainerStyle: cs.scrollContent,
          })}
        >
          {children}
        </Content>
      </SafeAreaView>
    );
  },
);
export default BackButtonLayout;

BackButtonLayout.displayName = "BackButtonLayout";
