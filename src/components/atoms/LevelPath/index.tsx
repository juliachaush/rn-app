import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "../../../theme/themeProvider";

import createStyles from "./styles";

type Point = {
  x: number;
  y: number;
};

type LevelPathProps = {
  start: Point;
  end: Point;
  color?: string;
  width?: number;
  dashArray?: number[];
};

export function LevelPath({
  start,
  end,
  color,
  width = 4,
  dashArray = [8, 4],
}: LevelPathProps) {
  const theme = useTheme();
  const cs = createStyles(theme);
  const controlPoint = {
    x: (start.x + end.x) / 2,
    y: Math.min(start.y, end.y) - 40,
  };

  const path = `M ${start.x} ${start.y} Q ${controlPoint.x} ${controlPoint.y} ${end.x} ${end.y}`;

  const svgWidth = Math.max(start.x, end.x) + width;
  const svgHeight = Math.max(start.y, end.y) + width;

  return (
    <View style={cs.container}>
      <Svg width={svgWidth} height={svgHeight}>
        <Path
          d={path}
          stroke={color || theme.colors.accent}
          strokeWidth={width}
          fill="none"
          strokeDasharray={dashArray}
        />
      </Svg>
    </View>
  );
}
