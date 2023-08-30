import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMediaVideo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 4H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.584 10.002a1 1 0 0 1 1.514-.858l3.331 1.999a1 1 0 0 1 0 1.715l-3.33 1.998A1 1 0 0 1 9.583 14v-3.997Z"
    />
  </Svg>
);
export default SvgMediaVideo;
