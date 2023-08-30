import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolder = (props) => (
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
      d="M19 6.94h-6.471a1 1 0 0 1-.827-.438l-1.405-2.065A1 1 0 0 0 9.471 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.94a2 2 0 0 0-2-2v0Z"
    />
  </Svg>
);
export default SvgFolder;
