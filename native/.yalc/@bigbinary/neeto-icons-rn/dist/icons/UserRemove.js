import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserRemove = (props) => (
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
      d="M18 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20.414 12.414l-2.828-2.828M17.586 12.414l2.828-2.828"
    />
  </Svg>
);
export default SvgUserRemove;
