export const Images = {
  androidIconBackground: require("./android-icon-background.png"),
  androidIconForeground: require("./android-icon-foreground.png"),
  androidIconMonochrome: require("./android-icon-monochrome.png"),

  background: require("./background.jpg"),
  backgroundServerRoom: require("./background-server-room.jpg"),

  blockchainCartoon1: require("./blockchain-technology-cartoon-illustration (1).jpg"),
  blockchainCartoon2: require("./blockchain-technology-cartoon-illustration (2).jpg"),
  blockchainCartoon: require("./blockchain-technology-cartoon-illustration.jpg"),

  cookie: require("./cookie.png"),
  cookieWithBook: require("./cookie-with-book.png"),

  cornwel: require("./cornwel.jpg"),

  favicon: require("./favicon.png"),
  icon: require("./icon.png"),

  mascotPuppy: require("./mascot_puppy.jpg"),
  mascotOne: require("./mascot-one.jpg"),

  schedule: require("./schedule.png"),

  splashIcon: require("./splash-icon.png"),

  time: require("./time.png"),
  timeManagement: require("./time-management.png"),

  winter: require("./winter.jpg"),
  winterBg: require("./winter-bg.jpg"),
  winterBg3d: require("./winter-bg-3d.jpg"),
} as const;

export type ImageName = keyof typeof Images;
