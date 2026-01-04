export const Icons = {
  achievement: require("./achievement.png"),
  bookOutline: require("./book-outline.png"),
  extensionPuzzleOutline: require("./extension-puzzle-outline.png"),
  notification: require("./notification.png"),
  personOutline: require("./person-outline.png"),
  starOutline: require("./star-outline.png"),
  star: require("./star.png"),
} as const;

export type IconName = keyof typeof Icons;
