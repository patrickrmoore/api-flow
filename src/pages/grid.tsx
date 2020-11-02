import React, { useState } from "react";
import { Grid as VGrid } from "@vx/grid";
import { Line, Polygon } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleLinear } from "@vx/scale";
import { Flex, useThemeUI } from "theme-ui";

const xScale = scaleLinear<number>({
  domain: [0, 1],
  range: [0, 500],
});
const yScale = scaleLinear<number>({
  domain: [0, 1],
  range: [0, 500],
});
export const Grid = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const height = 500;
  const width = 500;
  const { theme } = useThemeUI();
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex>Currently Hovered: {hovered ?? ""}</Flex>

      <svg height={height} width={width}>
        <VGrid
          top={0}
          left={0}
          xScale={xScale}
          yScale={yScale}
          width={width}
          height={height}
          stroke="white"
          strokeOpacity={0.3}
          numTicksColumns={2}
          numTicksRows={0}
        />
        <Group onMouseEnter={() => setHovered("1")}>
          <Line
            from={{ x: xScale(0.0), y: yScale(0.25) }}
            to={{ x: xScale(0.5), y: yScale(0.25) }}
            stroke="white"
          />
          <Polygon
            size={5}
            sides={3}
            center={{ x: xScale(0.49) as number, y: yScale(0.25) as number }}
            fill={hovered === "1" ? theme.colors!.primary : theme.colors!.text}
          />
        </Group>
        <Line
          from={{ x: xScale(0.5), y: yScale(0.5) }}
          to={{ x: xScale(1), y: yScale(0.5) }}
          stroke="white"
          onMouseEnter={() => setHovered("2")}
        />
        <Line
          from={{ x: xScale(1), y: yScale(0.75) }}
          to={{ x: xScale(0), y: yScale(0.75) }}
          stroke="white"
          onMouseEnter={() => setHovered("3")}
        />
      </svg>
    </Flex>
  );
};
