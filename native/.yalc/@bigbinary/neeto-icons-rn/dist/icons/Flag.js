import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlag = (props) => (
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
      d="M1 10h14l-4.5-4.5L15 1H1v16"
    />
  </Svg>
);
export default SvgFlag;
