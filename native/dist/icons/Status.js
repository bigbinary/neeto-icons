import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStatus = (props) => (
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
      d="M6 12h3.333L12 17V7l2.667 5H18m3 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);
export default SvgStatus;
