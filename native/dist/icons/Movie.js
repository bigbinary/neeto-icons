import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgMovie = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect
      width={16.5}
      height={12.5}
      x={3.75}
      y={5.75}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={1.25}
    />
    <Path fill="#68737D" d="m10 14.5 4-2.5-4-2.5" />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 14.5 4-2.5-4-2.5v5Z"
    />
  </Svg>
);
export default SvgMovie;
