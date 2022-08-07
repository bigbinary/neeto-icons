import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBuilding = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.27 7a2.25 2.25 0 0 1 2.25-2.25h4.472A2.25 2.25 0 0 1 14.242 7v12.25H5.27V7Z"
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.972 20H19.5v-7.378a3 3 0 0 0-3-3h-1.528v1.5H16.5a1.5 1.5 0 0 1 1.5 1.5V18.5h-3.028V20Z"
      fill="#68737D"
    />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M2.25 19.25h19.5M5.75 9.25h2.5M7.75 9.25h3.5M5.75 12.25h2.5M7.75 12.25h3.5"
    />
  </Svg>
);

export default SvgBuilding;
