import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 4.5H6a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7.5a3 3 0 0 0-3-3ZM17 16.986H7M7.5 3v3M16.5 3v3"
    />
  </Svg>
);
export default SvgCalendar;
