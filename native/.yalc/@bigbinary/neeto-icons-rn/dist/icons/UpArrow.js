import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUpArrow = (props) => (
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
      d="M6.023 10.514 12 4.498l5.977 6.016M12.01 4.51V19.5 4.51Z"
    />
  </Svg>
);
export default SvgUpArrow;
