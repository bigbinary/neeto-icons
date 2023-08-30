import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSendPlane = (props) => (
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
      d="M10.88 12H5.39M5.243 3.63l14.592 7.294v0a1.202 1.202 0 0 1 0 2.152L5.243 20.37v0a1.203 1.203 0 0 1-1.701-1.384L5.392 12l-1.85-6.986v0a1.203 1.203 0 0 1 1.7-1.384h0Z"
    />
  </Svg>
);
export default SvgSendPlane;
