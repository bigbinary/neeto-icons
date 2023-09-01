import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPrint = (props) => (
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
      d="M16.814 8V4a1 1 0 0 0-1-1H8.186a1 1 0 0 0-1 1v4M7 17H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 21H8a1 1 0 0 1-1-1v-6h10v6a1 1 0 0 1-1 1Z"
    />
  </Svg>
);
export default SvgPrint;
