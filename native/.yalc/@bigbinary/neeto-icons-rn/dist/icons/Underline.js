import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnderline = (props) => (
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
      d="M15 5v6.667c0 .884-.369 1.732-1.025 2.357A3.59 3.59 0 0 1 11.5 15v0M8 5v6.667c0 .884.369 1.732 1.025 2.357A3.59 3.59 0 0 0 11.5 15v0M19 18.5H5"
    />
  </Svg>
);
export default SvgUnderline;
