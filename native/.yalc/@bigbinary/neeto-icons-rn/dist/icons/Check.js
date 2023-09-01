import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheck = (props) => (
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
      d="M17.5 9 9 17.5l-4-4"
    />
  </Svg>
);
export default SvgCheck;
