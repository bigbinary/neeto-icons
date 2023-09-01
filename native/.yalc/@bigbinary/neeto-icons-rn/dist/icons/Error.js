import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgError = (props) => (
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
      d="m9 9 6 6m-6 0 6-6m-3-6a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
    />
  </Svg>
);
export default SvgError;
