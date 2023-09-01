import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextCross = (props) => (
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
      d="M8 18h6a3 3 0 0 0 3-3v0M19 12H5M16 6h-5a3 3 0 0 0-3 3"
    />
  </Svg>
);
export default SvgTextCross;
