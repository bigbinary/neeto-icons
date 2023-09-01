import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckmark = (props) => (
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
      d="M22 11.086v.92a10 10 0 1 1-5.93-9.14"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 4-9.23 10L10 11.003"
    />
  </Svg>
);
export default SvgCheckmark;
