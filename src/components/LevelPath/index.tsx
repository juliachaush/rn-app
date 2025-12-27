import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Point = {
  x: number;
  y: number;
};

type Props = {
  start: Point;
  end: Point;
  color?: string;
  width?: number;
  dashArray?: number[];
};

export function LevelPath({
  start,
  end,
  color = "#096026ff",
  width = 4,
  dashArray = [8, 4],
}: Props) {
  const controlPoint = {
    x: (start.x + end.x) / 2,
    y: Math.min(start.y, end.y) - 40,
  };

  const path = `M ${start.x} ${start.y} Q ${controlPoint.x} ${controlPoint.y} ${end.x} ${end.y}`;

  const svgWidth = Math.max(start.x, end.x) + width;
  const svgHeight = Math.max(start.y, end.y) + width;

  return (
    <View
      style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
    >
      <Svg width={svgWidth} height={svgHeight}>
        <Path
          d={path}
          stroke={color}
          strokeWidth={width}
          fill="none"
          strokeDasharray={dashArray}
        />
      </Svg>
    </View>
  );
}
