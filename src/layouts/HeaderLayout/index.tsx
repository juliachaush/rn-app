import { type PropsWithChildren, ReactNode, forwardRef } from "react";
import { ScrollView, Text, View } from "react-native";

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
      <View style={cs.container}>
        <View style={cs.header}>
          <Image
            source={require("../../../assets/icons/achievement.png")}
            style={cs.icon}
            width={40}
            height={40}
          />
          {title && <Text style={cs.title}>{title}</Text>}
          <Image
            source={require("../../../assets/icons/notification.png")}
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
      </View>
    );
  },
);

HeaderLayout.displayName = "HeaderLayout";
export default HeaderLayout;
