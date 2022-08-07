import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBank = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.828 3.2a.25.25 0 0 1 .344 0l6.161 5.869a.25.25 0 0 1-.172.431H5.839a.25.25 0 0 1-.172-.431l6.16-5.869Z"
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M6.75 17.25v-4.5M10.083 17.25v-4.5M13.417 17.25v-4.5M16.75 17.25v-4.5M5.55 20.25h12.5"
    />
  </Svg>
);

export default SvgBank;
