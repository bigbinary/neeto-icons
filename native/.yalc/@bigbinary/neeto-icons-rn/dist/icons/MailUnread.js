import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailUnread = (props) => (
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
      d="M13 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.961 7.615-7.427 4.339a3 3 0 0 1-3.027 0L3.041 7.593"
    />
    <Path fill="#68737D" d="M18.5 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
  </Svg>
);
export default SvgMailUnread;
