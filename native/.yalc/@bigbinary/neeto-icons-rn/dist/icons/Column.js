import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgColumn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect
      width={16.5}
      height={14.5}
      x={4.75}
      y={20.25}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={2.25}
      transform="rotate(-90 4.75 20.25)"
    />
    <Path stroke="#68737D" strokeWidth={1.5} d="M12 4v16.313" />
  </Svg>
);
export default SvgColumn;
