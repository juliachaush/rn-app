import { type PropsWithChildren, ReactNode, forwardRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButtonHeader from "../../components/BackButtonHeader";

import styles from "./styles";

type Props = {
  title?: string;
  topElement?: ReactNode;
  isScroll?: boolean;
} & PropsWithChildren;

const LayoutWithHeader = forwardRef<ScrollView, Props>(
  ({ title, topElement, isScroll = true, children }, ref) => {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.headerWrap}>
            <BackButtonHeader title="home" />
          </View>
          <Text style={{ color: "white" }}>HoHo</Text>
          <View style={styles.flexOne}>
            {isScroll ? (
              <ScrollView
                ref={ref}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
                bounces
              >
                {children}
              </ScrollView>
            ) : (
              <View style={styles.flexOne}>{children}</View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  },
);

export default LayoutWithHeader;

LayoutWithHeader.displayName = "LayoutWithHeader";
