import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParagraph = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 4.5h7m-7 5h7m-16 5h16m-16 5h16M9 9.5l-2.5-5-2.5 5m.5-1h4"
    />
  </Svg>
);
export default SvgParagraph;
