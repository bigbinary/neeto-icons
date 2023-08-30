import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoInterview = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.618 3h4.764v0a1 1 0 0 1 .894 1.447L14 7h-4L8.724 4.447v0A1 1 0 0 1 9.618 3v0Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6.998 8.014 18.58v0a1 1 0 0 0 .386.97l3 2.249v0a1 1 0 0 0 1.2 0l3-2.25v0a1 1 0 0 0 .386-.969L14 6.998"
    />
  </Svg>
);
export default SvgNeetoInterview;
