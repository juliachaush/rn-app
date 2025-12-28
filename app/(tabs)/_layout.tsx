import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { HapticTab } from "../../src/components/Tab";
import { useTheme } from "../../src/theme/themeProvider";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.icon,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/star-outline.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="play/index"
        options={{
          title: "Play",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/extension-puzzle-outline.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/book-outline.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="review/index"
        options={{
          title: "Review",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/star-outline.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/person-outline.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
