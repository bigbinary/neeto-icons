import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBank = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
      d="M11.828 3.2a.25.25 0 0 1 .344 0l6.161 5.869a.25.25 0 0 1-.172.431H5.839a.25.25 0 0 1-.172-.431l6.16-5.869Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.75 17.25v-4.5M10.083 17.25v-4.5M13.417 17.25v-4.5M16.75 17.25v-4.5M5.55 20.25h12.5"
    />
  </Svg>
);
export default SvgBank;
