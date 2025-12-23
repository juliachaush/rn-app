import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import styles from "./styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ProgressWheelProps {
  progress?: number;
  backgroundImage?: any;
}

export default function ProgressWheel({
  progress = 70,
  backgroundImage,
}: ProgressWheelProps) {
  const size = 120;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const animatedText: Animated.AnimatedInterpolation<string | number> =
    animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ["0", "100"],
    });

  return (
    <ImageBackground
      source={backgroundImage || require("../../images/background.jpg")}
      style={styles.container}
      imageStyle={{ borderRadius: 24 }}
    >
      <Svg width={size} height={size}>
        <Circle
          stroke="#eee"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <AnimatedCircle
          stroke="#0b622aff"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>

      <View style={styles.textWrapper}>
        <Animated.Text style={styles.text}>Hello%</Animated.Text>
      </View>
    </ImageBackground>
  );
}
