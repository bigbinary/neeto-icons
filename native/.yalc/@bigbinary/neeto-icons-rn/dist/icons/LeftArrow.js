import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLeftArrow = (props) => (
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
      d="M10.013 5.988 4.002 12l6.011 6.012M4.01 11.98H19 4.01Z"
    />
  </Svg>
);
export default SvgLeftArrow;
