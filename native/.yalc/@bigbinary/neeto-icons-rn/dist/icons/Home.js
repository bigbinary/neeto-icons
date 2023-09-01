import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.734 9.764 12.002 3l8.265 6.764c.464.379.733.948.733 1.547V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.688c0-.6.269-1.169.734-1.548v0ZM8 17h8"
    />
  </Svg>
);
export default SvgHome;
