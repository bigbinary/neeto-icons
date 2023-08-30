import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#68737D" d="m7 18 11-6.5L7 5" />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 18 11-6.5L7 5v13Z"
    />
  </Svg>
);
export default SvgPlay;
