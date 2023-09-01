import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAppSwitcher = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      d="M8 4.5A3.5 3.5 0 0 0 4.5 1H1v7h7V4.5ZM8 15.5A3.5 3.5 0 0 0 4.5 12H1v7h7v-3.5ZM19 4.5A3.5 3.5 0 0 0 15.5 1H12v7h7V4.5ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5H12v7h7v-3.5Z"
    />
  </Svg>
);
export default SvgAppSwitcher;
