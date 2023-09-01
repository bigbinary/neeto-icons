import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUp = (props) => (
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
      d="m18 15-6-6-6 6"
    />
  </Svg>
);
export default SvgUp;
