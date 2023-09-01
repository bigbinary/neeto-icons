import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSend = (props) => (
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
      d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
    />
  </Svg>
);
export default SvgSend;
