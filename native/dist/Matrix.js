import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SvgMatrix = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={3.75}
      y={4.75}
      width={16.5}
      height={14.5}
      rx={2.25}
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Path
      d="M3 7a3 3 0 0 1 3-3h6v8H3V7ZM12 12h9v5a3 3 0 0 1-3 3h-6v-8Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgMatrix;
