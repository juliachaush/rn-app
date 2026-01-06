import { ImageSourcePropType } from "react-native";
import { LocalImage } from "../../atoms/Image/LocalImage";

type TabIconProps = {
  color: string;
  source: ImageSourcePropType;
};

export const TabIcon = ({ color, source }: TabIconProps) => (
  <LocalImage
    source={source}
    style={{ tintColor: color }}
    width={24}
    height={24}
  />
);
