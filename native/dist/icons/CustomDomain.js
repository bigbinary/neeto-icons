import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCustomDomain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 16a12 12 0 1 0-12 12M4.8 12h22.4M4.8 20H16m-.563-16a22.667 22.667 0 0 0 0 24m1.23-24C18.959 7.673 20 11.835 20 16m4 12v-9.333m0 0 4 4m-4-4-4 4"
    />
  </Svg>
);
export default SvgCustomDomain;
