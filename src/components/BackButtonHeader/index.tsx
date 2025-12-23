import { useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { IconSymbol } from "../Icon";

export default function BackButtonHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={navigation.goBack}>
        <IconSymbol name={"chevron.left.forwardslash.chevron.right"} />
      </Pressable>
      <Text>backbutton</Text>
    </View>
  );
}
