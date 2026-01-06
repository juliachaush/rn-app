import { Image } from "expo-image";
import React from "react";
import { ImageStyle, StyleProp } from "react-native";

type Props = {
  source: any;
  style?: StyleProp<ImageStyle>;
  width: number;
  height: number;
};

export const LocalImage = React.memo(
  ({ source, style, width, height }: Props) => {
    return (
      <Image
        source={source}
        style={[
          {
            width,
            height,
            backgroundColor: "none",
            borderRadius: 0,
          },
          style,
        ]}
        contentFit="cover"
        transition={500}
        cachePolicy="memory-disk"
        placeholderContentFit="cover"
      />
    );
  },
);
