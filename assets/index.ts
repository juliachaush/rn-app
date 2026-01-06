export const ASSETS = {
  icons: {
    achievement: require("./icons/achievement.png"),
    bookOutline: require("./icons/book-outline.png"),
    extensionPuzzleOutline: require("./icons/extension-puzzle-outline.png"),
    notification: require("./icons/notification.png"),
    personOutline: require("./icons/person-outline.png"),
    starOutline: require("./icons/star-outline.png"),
    star: require("./icons/star.png"),
  } as const,

  images: {
    // Android adaptive icons
    androidIconBackground: require("./images/android-icon-background.png"),
    androidIconForeground: require("./images/android-icon-foreground.png"),
    androidIconMonochrome: require("./images/android-icon-monochrome.png"),

    // Backgrounds
    background: require("./images/background.jpg"),
    backgroundServerRoom: require("./images/background-server-room.jpg"),
    winter: require("./images/winter.jpg"),
    winterBg: require("./images/winter-bg.jpg"),
    winterBg3d: require("./images/winter-bg-3d.jpg"),

    // Blockchain illustrations
    blockchainCartoon: require("./images/blockchain-technology-cartoon-illustration.jpg"),
    blockchainCartoon1: require("./images/blockchain-technology-cartoon-illustration (1).jpg"),
    blockchainCartoon2: require("./images/blockchain-technology-cartoon-illustration (2).jpg"),

    // Mascots
    mascotPuppy: require("./images/mascot_puppy.jpg"),
    mascotOne: require("./images/mascot-one.jpg"),

    // Cookie character
    cookie: require("./images/cookie.png"),
    cookieWithBook: require("./images/cookie-with-book.png"),

    // App icons & favicon
    favicon: require("./images/favicon.png"),
    icon: require("./images/icon.png"),
    splashIcon: require("./images/splash-icon.png"),

    cornwel: require("./images/cornwel.jpg"),
    schedule: require("./images/schedule.png"),
    time: require("./images/time.png"),
    timeManagement: require("./images/time-management.png"),
  } as const,
} as const;

export type IconName = keyof typeof ASSETS.icons;
export type ImageName = keyof typeof ASSETS.images;

export type AssetPath =
  | { type: "icon"; name: IconName }
  | { type: "image"; name: ImageName };
