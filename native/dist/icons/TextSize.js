import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextSize = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2F3941"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.313 17 8.155 6 3 17m1.031-2.2h8.25M21 17l-2.5-5-2.5 5m.5-.833h4"
    />
  </Svg>
);
export default SvgTextSize;
