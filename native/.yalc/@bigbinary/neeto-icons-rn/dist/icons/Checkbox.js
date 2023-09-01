import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgCheckbox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect
      width={16.5}
      height={16.5}
      x={3.75}
      y={3.75}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={1.25}
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.126 8.625 9.75 15l-3-3"
    />
  </Svg>
);
export default SvgCheckbox;
