import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgZoom = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 48 48"
    fill={props.color}
    {...props}
  >
    <Circle cx={24} cy={24} r={20} fill="#2196f3" />
    <Path
      fill="#fff"
      d="M29 31H14a3 3 0 0 1-3-3V17h15a3 3 0 0 1 3 3v11zM37 31l-6-4v-6l6-4z"
    />
  </Svg>
);
export default SvgZoom;
