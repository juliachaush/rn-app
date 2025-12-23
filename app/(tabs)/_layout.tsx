import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { HapticTab } from "../../src/components/Tab";
import { useColorScheme } from "../../src/hooks/useColorScheme";
import { colors } from "../../src/styles/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../src/icons/star-outline-1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="play/index"
        options={{
          title: "play",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../src/icons/extension-puzzle-outline-1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../src/icons/book-outline-1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="review/index"
        options={{
          title: "review",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../src/icons/star-outline-1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../src/icons/person-outline-1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
