import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import { LevelPath } from "../../../src/components/LevelPath";
import { LevelPlayButton } from "../../../src/components/LevelPlayButton";
import { useLevels } from "../../../src/hooks/useLevels";
import { updateCurrentLevel } from "../../../src/store/slices/userLevelResults.slice";
import { AppDispatch } from "../../../src/store/store";
import { Theme } from "../../../src/theme/theme";
import { useTheme } from "../../../src/theme/themeProvider";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const cookies = [
  require("../../../assets/images/cookie.png"),
  require("../../../assets/images/cookie.png"),
  require("../../../assets/images/cookie-with-book.png"),
  require("../../../assets/images/cookie.png"),
  require("../../../assets/images/cookie-with-book.png"),
];

export default function PlayScreen() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const cs = styles(theme);

  const { data: levels, loading, error } = useLevels();

  const unlockedLevel = 1;

  if (loading) return <Text style={cs.loadingText}>Loading...</Text>;
  if (error) return <Text style={cs.loadingText}>Error: {error}</Text>;

  const handlePressLevel = (levelId: string) => {
    dispatch(updateCurrentLevel(levelId));
    router.push(`/level/${levelId}`);
  };

  return (
    <SafeAreaView style={cs.container}>
      <Text style={cs.text}>Get started!</Text>
      <Text style={cs.subtext}>Start learning and take your cookie!</Text>

      <View style={cs.pathContainer}>
        {levels.map((level, index) => {
          const enabled = Number(level.id) <= unlockedLevel;
          const nextLevel = levels[index + 1];

          const posX = level.position?.x ?? 60 + index * 80;
          const posY = level.position?.y ?? 200 + Math.sin(index) * 50;

          const cookieImg = cookies[index % cookies.length];

          return (
            <React.Fragment key={level.id}>
              <LevelPlayButton
                enabled={enabled}
                onPress={() => handlePressLevel(level.id)}
                x={posX}
                y={posY}
              />

              <View
                style={[
                  cs.cookieWrapper,
                  {
                    left: posX - 60,
                    top: posY - 20,
                    zIndex: 2,
                  },
                ]}
              >
                <Image source={cookieImg} style={cs.cookieImg} />
                <Text style={cs.levelLabel}>Level {level.id}</Text>
              </View>

              {nextLevel && (
                <LevelPath
                  start={{ x: posX, y: posY }}
                  end={{
                    x: nextLevel.position?.x ?? 60 + (index + 1) * 80,
                    y: nextLevel.position?.y ?? 200 + Math.sin(index + 1) * 50,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    text: {
      fontSize: 40,
      color: theme.colors.text,
      textAlign: "center",
      marginTop: 40,
      fontWeight: "900",
      textTransform: "uppercase",
    },

    subtext: {
      fontSize: 16,
      fontWeight: "400",
      color: theme.colors.textSecondary,
      textAlign: "center",
      marginBottom: 40,
    },

    pathContainer: {
      flex: 1,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: 160,
      left: 76,
    },

    cookieWrapper: {
      position: "absolute",
      alignItems: "center",
    },

    cookieImg: {
      width: 56,
      height: 56,
    },

    levelLabel: {
      marginTop: 4,
      fontSize: 12,
      fontWeight: "900",
      color: theme.colors.text,
    },

    loadingText: {
      color: theme.colors.text,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
