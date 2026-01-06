import { ImageSourcePropType } from "react-native";
import { ASSETS } from "../../assets";

export const TABS = [
  {
    name: "home/index",
    title: "Home",
    icon: ASSETS.icons.starOutline,
  },
  {
    name: "play/index",
    title: "Play",
    icon: ASSETS.icons.extensionPuzzleOutline,
  },
  {
    name: "explore/index",
    title: "Explore",
    icon: ASSETS.icons.bookOutline,
  },
  {
    name: "review/index",
    title: "Review",
    icon: ASSETS.icons.starOutline,
  },
  {
    name: "profile/index",
    title: "Profile",
    icon: ASSETS.icons.personOutline,
  },
] as const;

export type TabConfig = {
  name: string;
  title: string;
  icon: ImageSourcePropType;
};
