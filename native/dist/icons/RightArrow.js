import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.483 5.988 19.52 12l-6.037 6.012M4.48 11.98h14.99H4.48Z"
    />
  </Svg>
);
export default SvgRightArrow;
