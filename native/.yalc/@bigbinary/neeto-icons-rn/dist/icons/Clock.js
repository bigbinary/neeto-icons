import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.557 3.687a8.998 8.998 0 0 1 11.756 4.87 8.998 8.998 0 0 1-4.87 11.756A8.998 8.998 0 1 1 8.557 3.687"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.718 7.985v4.651l3.656 2.229"
    />
  </Svg>
);
export default SvgClock;
