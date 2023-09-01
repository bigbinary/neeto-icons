import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCode = (props) => (
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
      d="m13.78 4-3.56 16M18 8l4 4-4 4M6 16l-4-4 4-4"
    />
  </Svg>
);
export default SvgCode;
