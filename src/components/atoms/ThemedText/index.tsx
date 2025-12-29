// import { Text, type TextProps } from "react-native";

// import { useThemeColor } from "../../hooks/useThemeColor";
// import { typography } from "../../styles/typography";

// export type ThemedTextProps = TextProps & {
//   lightColor?: string;
//   darkColor?: string;
//   type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
// };

// export function ThemedText({
//   style,
//   lightColor,
//   darkColor,
//   type = "default",
//   ...rest
// }: ThemedTextProps) {
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

//   return (
//     <Text
//       style={[
//         { color },
//         type === "default" ? typography.default : undefined,
//         type === "title" ? typography.title : undefined,
//         type === "defaultSemiBold" ? typography.defaultSemiBold : undefined,
//         type === "subtitle" ? typography.subtitle : undefined,
//         type === "link" ? typography.link : undefined,
//         style,
//       ]}
//       {...rest}
//     />
//   );
// }
