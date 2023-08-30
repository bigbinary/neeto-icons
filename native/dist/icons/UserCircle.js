import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4M16 4.651a2.5 2.5 0 1 1 0 5M11.405 4.996a3.401 3.401 0 1 1-4.81 4.81 3.401 3.401 0 0 1 4.81-4.81M17 13a4 4 0 0 1 4 4"
    />
  </Svg>
);
export default SvgUserCircle;
