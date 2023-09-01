import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTimeTracking = (props) => (
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
      d="M14.031 20.97a8.94 8.94 0 0 1-5.443-.453A8.999 8.999 0 0 1 15.474 3.89c4.116 1.705 6.284 6.11 5.32 10.313m-3.513 5.25h4m-2 2v-4"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.75 8.19v4.65l3.655 2.23"
    />
  </Svg>
);
export default SvgTimeTracking;
