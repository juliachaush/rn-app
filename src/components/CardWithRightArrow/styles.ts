import { StyleSheet } from "react-native";

import { colors } from "../../styles/theme";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.dark.tint,
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    // Тінь для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Тінь для Android
    elevation: 2,
    borderWidth: 2,
    borderColor: "#ffffffff",
  },
  pressed: {
    backgroundColor: "#F2F2F7",
    opacity: 0.9,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    marginRight: 12,
    backgroundColor: "#EBF5FF",
    padding: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.dark.background,
  },
  subtitle: {
    fontSize: 13,
    color: colors.dark.background,
    marginTop: 2,
  },
  iconColor: {
    color: colors.light.icon,
  },
});

export default styles;
