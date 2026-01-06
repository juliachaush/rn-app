import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { ASSETS } from "../../../assets";
import { LocalImage } from "../../../src/components/atoms/Image/LocalImage";
import learningVideos from "../../../src/data/learningVideos.json";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.6;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

export default function ExploreScreen() {
  // screen in progress
  return (
    <View style={cs.container}>
      <Text style={cs.heading}>Trending Trainings Now</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {learningVideos.map((movie: any, index: number) => (
          <View key={index} style={cs.card}>
            <LocalImage
              source={ASSETS.images.blockchainCartoon1}
              style={cs.image}
              width={180}
              height={240}
            />
            <Text style={cs.title}>{movie.title}</Text>
            <Text style={cs.viewsText}>Views:193400</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const cs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    marginTop: 24,
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
    height: "80%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    padding: 8,
  },
  viewsText: {
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 8,
    color: "white",
  },
});
