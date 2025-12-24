import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

import { BigActionCard, MenuCard, QuizCard } from "../../components/index";

import styles from "./styles";

export function HomeScreen() {
  const date = new Date();

  const longDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/images/cookie.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text style={styles.title}>Check your quiz for today</Text>
      {["1"].map((id) => (
        <View key={id}>
          <QuizCard
            id={id}
            title={id === "1" ? "React Native Basics" : "Native Modules"}
            description={
              id === "1"
                ? "Learn components and styles"
                : "Location Camera Sound"
            }
            image={
              id === "1"
                ? require("../../../src/images/mascot-one.jpg")
                : require("../../../src/images/mascot_puppy.jpg")
            }
          />
          <MenuCard
            id={id}
            title="Check your quiz for today"
            subtitle="Update your knowladge"
          />
        </View>
      ))}
      <BigActionCard
        id={"1"}
        date={longDate}
        title="Attempt the call"
        subtitle="Have fun with collegs to learn React Native"
      />
    </View>
  );
}
