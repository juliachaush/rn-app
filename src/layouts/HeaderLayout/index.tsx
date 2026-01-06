import { type PropsWithChildren, ReactNode, forwardRef } from "react";
import { ScrollView, Text, View } from "react-native";

import { LocalImage } from "../../components/atoms/Image/LocalImage";
import { useTheme } from "../../theme/themeProvider";

import { ASSETS } from "../../../assets";
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
          <LocalImage
            source={ASSETS.icons.achievement}
            style={cs.icon}
            width={40}
            height={40}
          />
          {title && <Text style={cs.title}>{title}</Text>}
          <LocalImage
            source={ASSETS.icons.notification}
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
