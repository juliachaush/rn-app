import { StyleSheet } from "react-native";

import { colors } from "../../styles/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.darkAccent,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  dateBadge: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  dateText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.dark.text,
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: colors.dark.text,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  iconColor: {
    color: colors.light.text,
  },
  themedColotr: {
    color: colors.light.surface,
  },
});

export default styles;
