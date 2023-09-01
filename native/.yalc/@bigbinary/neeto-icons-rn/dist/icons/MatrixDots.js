import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgMatrixDots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Circle cx={5.5} cy={5.5} r={2.5} fill="#68737D" />
    <Circle cx={12} cy={5.5} r={2.5} fill="#68737D" />
    <Circle cx={18.5} cy={5.5} r={2.5} fill="#68737D" />
    <Circle cx={5.5} cy={12} r={2} stroke="#68737D" />
    <Circle cx={12} cy={12} r={2.5} fill="#68737D" />
    <Circle cx={18.5} cy={12} r={2} stroke="#68737D" />
    <Circle cx={5.5} cy={18.5} r={2} stroke="#68737D" />
    <Circle cx={12} cy={18.5} r={2} stroke="#68737D" />
    <Circle cx={18.5} cy={18.5} r={2} stroke="#68737D" />
  </Svg>
);
export default SvgMatrixDots;
