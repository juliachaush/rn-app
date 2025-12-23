import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: "hidden",
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  gradient: {
    padding: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#ffffffff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1DB954",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#a0f0b0",
    fontSize: 14,
    marginTop: 4,
  },
});

export default styles;
