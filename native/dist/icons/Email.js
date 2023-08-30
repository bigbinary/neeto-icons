import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEmail = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 21h-5a9 9 0 1 1 9-9v1.5a2.5 2.5 0 0 1-5 0V12a4 4 0 0 0-4-4v0a4 4 0 1 0 4 4"
    />
  </Svg>
);
export default SvgEmail;
