import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClose = (props) => (
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
      d="m6 6 12 12M18 6 6 18"
    />
  </Svg>
);
export default SvgClose;
