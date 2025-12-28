import { type PropsWithChildren, forwardRef } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButtonHeader from "../../components/BackButton";

import cs from "./styles";

type Props = {
  title?: string;
  isScroll?: boolean;
} & PropsWithChildren;

const BackButtonLayout = forwardRef<ScrollView, Props>(
  ({ title, isScroll = true, children }, ref) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={cs.headerWrap}>
            <BackButtonHeader title={title} />
          </View>
          <View style={{ flex: 1 }}>
            {isScroll ? (
              <ScrollView
                ref={ref}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
              >
                {children}
              </ScrollView>
            ) : (
              <View style={{ flex: 1 }}>{children}</View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  },
);
export default BackButtonLayout;

BackButtonLayout.displayName = "BackButtonLayout";
