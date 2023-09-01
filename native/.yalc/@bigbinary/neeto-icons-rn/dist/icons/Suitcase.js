import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSuitcase = (props) => (
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
      d="M19 21H5v0a2 2 0 0 1-2-2v-9 0a2 2 0 0 1 2-2h14v0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2s0 0 0 0v0Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 21V6a2 2 0 0 0-2-2h-4v0a2 2 0 0 0-2 2v15"
    />
  </Svg>
);
export default SvgSuitcase;
