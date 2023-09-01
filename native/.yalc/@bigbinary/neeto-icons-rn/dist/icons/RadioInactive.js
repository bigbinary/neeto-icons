import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgRadioInactive = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Circle cx={12} cy={12} r={8.25} stroke="#68737D" strokeWidth={1.5} />
  </Svg>
);
export default SvgRadioInactive;
