import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollapse = (props) => (
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
      d="M4.01 11.98H17m-6.987-5.992L4.002 12l6.011 6.012M4 6v12"
    />
  </Svg>
);
export default SvgCollapse;
