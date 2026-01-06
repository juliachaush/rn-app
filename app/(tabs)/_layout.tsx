import { Tabs } from "expo-router";
import React, { useMemo } from "react";

import { HapticTab } from "../../src/components/atoms/Tab";
import { TabIcon } from "../../src/components/molecules/TabIcon/TabIcon";
import { useTheme } from "../../src/theme/themeProvider";
import { TABS } from "./tabs.config";

export default function TabLayout() {
  const theme = useTheme();

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarActiveTintColor: theme.colors.accent,
      tabBarInactiveTintColor: theme.colors.icon,
      tabBarButton: HapticTab,
      tabBarStyle: {
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.border,
      },
    }),
    [theme],
  );

  return (
    <Tabs screenOptions={screenOptions}>
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <TabIcon color={color} source={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
