import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgListNumber = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 4h9m-8.85 5H20M5.25 9V4L4 5.25M11 14h9m-8.85 5H20M4 15a1 1 0 0 1 1-1h.614a1.228 1.228 0 0 1 .933 2.028L4 19h3M4 9h2.5"
    />
  </Svg>
);
export default SvgListNumber;
