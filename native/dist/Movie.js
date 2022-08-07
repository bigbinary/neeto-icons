import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SvgMovie = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={3.75}
      y={5.75}
      width={16.5}
      height={12.5}
      rx={1.25}
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Path d="m10 14.5 4-2.5-4-2.5" fill="#68737D" />
    <Path
      d="m10 14.5 4-2.5-4-2.5v5Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMovie;
