import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDownload = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4m9 0V3v14Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 12-5.001 5.001-5-5.001"
    />
  </Svg>
);
export default SvgDownload;
