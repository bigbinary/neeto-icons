import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComputer = (props) => (
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
      d="M18.429 17H5.571A2.57 2.57 0 0 1 3 14.429V5.571A2.57 2.57 0 0 1 5.571 3h12.857A2.571 2.571 0 0 1 21 5.571v8.857A2.571 2.571 0 0 1 18.429 17v0Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 17 .5 4M10 17l-.5 4M8.14 21h7.72"
    />
  </Svg>
);
export default SvgComputer;
