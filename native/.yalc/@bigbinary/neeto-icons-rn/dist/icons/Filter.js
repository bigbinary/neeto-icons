import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilter = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.5 13.5 5.207-5.207A1 1 0 0 0 20 7.586V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.586c0 .265.105.52.293.707L9.5 13.5M9.5 13.5v6.249c0 .813.764 1.41 1.553 1.213l2.5-.625a1.25 1.25 0 0 0 .947-1.213V13.5"
    />
  </Svg>
);
export default SvgFilter;
