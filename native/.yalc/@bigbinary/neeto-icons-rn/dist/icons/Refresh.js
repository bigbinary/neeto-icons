import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRefresh = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4a8 8 0 1 0 3.825.973"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.825 8.048V4.512h3.536"
    />
  </Svg>
);
export default SvgRefresh;
