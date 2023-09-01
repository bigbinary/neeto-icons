import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgFile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect
      width={14.5}
      height={18.5}
      x={4.75}
      y={2.75}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={3.25}
    />
    <Rect
      width={4.5}
      height={5.5}
      x={14.75}
      y={2.75}
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
      rx={1.25}
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.75 11.25h6.5M7.75 14.25h4.5M7.75 17.25h6.5"
    />
  </Svg>
);
export default SvgFile;
