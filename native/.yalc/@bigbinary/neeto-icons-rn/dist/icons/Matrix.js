import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgMatrix = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect
      width={16.5}
      height={14.5}
      x={3.75}
      y={4.75}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={2.25}
    />
    <Path
      fill="#68737D"
      d="M3 7a3 3 0 0 1 3-3h6v8H3V7ZM12 12h9v5a3 3 0 0 1-3 3h-6v-8Z"
    />
  </Svg>
);
export default SvgMatrix;
