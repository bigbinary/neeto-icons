import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDashboard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 11.507V16M10.5 8v8M7.5 13.26V16M16.5 9.753V16M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
    />
  </Svg>
);
export default SvgDashboard;
