import { type PropsWithChildren, ReactNode, forwardRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "../../components/atoms/Image/Image";
import { useTheme } from "../../theme/themeProvider";

import createStyles from "./styles";

type HeaderLayoutProps = {
  title?: string;
  topElement?: ReactNode;
  isScroll?: boolean;
} & PropsWithChildren;

const HeaderLayout = forwardRef<ScrollView, HeaderLayoutProps>(
  ({ title, topElement, isScroll = true, children }, ref) => {
    const theme = useTheme();
    const cs = createStyles(theme);

    return (
      <SafeAreaView style={cs.container}>
        <View style={cs.header}>
          <Image
            source={require("../../../assets/icons/achivement.png")}
            style={cs.icon}
            width={40}
            height={40}
          />
          {title && <Text style={cs.title}>{title}</Text>}
          <Image
            source={require("../../../assets/icons/notofication.png")}
            style={cs.icon}
            width={40}
            height={40}
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
