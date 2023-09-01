import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRepeat = (props) => (
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
      d="m16.545 2 3.637 3.636-3.637 3.637"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.818 11.09V9.274a3.636 3.636 0 0 1 3.637-3.637h12.727M7.455 22l-3.637-3.636 3.637-3.637"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.182 12.91v1.817a3.636 3.636 0 0 1-3.637 3.637H3.818"
    />
  </Svg>
);
export default SvgRepeat;
