import type { ImageProps as ExpoImageProps } from "expo-image";
import { Image as ExpoImage } from "expo-image";
import React from "react";

type Props = {
  source: string | number | { uri: string };
  width: number;
  height: number;
  style?: ExpoImageProps["style"];
  [key: string]: any;
};

export const Image = ({ source, width, height, style, ...rest }: Props) => {
  const normalizedSource =
    typeof source === "string" ? { uri: source } : source;

  return (
    <ExpoImage
      source={normalizedSource}
      style={[{ width, height }, style]}
      contentFit="cover"
      transition={300}
      {...rest}
    />
  );
};
