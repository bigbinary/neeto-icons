import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDelete = (props) => (
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
      d="M15.541 21H8.46a2.25 2.25 0 0 1-2.244-2.077L5.25 6.375h13.5l-.965 12.548A2.25 2.25 0 0 1 15.54 21v0ZM20 6.375H4M9.188 3h5.624a1.125 1.125 0 0 1 1.126 1.125v2.25H8.061v-2.25A1.125 1.125 0 0 1 9.188 3v0ZM10 17h4"
    />
  </Svg>
);
export default SvgDelete;
