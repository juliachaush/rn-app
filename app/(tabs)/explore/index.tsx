import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import learningVideos from "../../../src/utils/learningVideos.json";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.6;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

export default function NetflixScreen() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#121212" }}
    >
      <Text style={styles.heading}>Trending Trainings Now</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {learningVideos.map((movie: any, index: number) => (
          <View key={index} style={styles.card}>
            <Image source={movie.image} style={styles.image} />
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    padding: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginRight: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#222",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
});
