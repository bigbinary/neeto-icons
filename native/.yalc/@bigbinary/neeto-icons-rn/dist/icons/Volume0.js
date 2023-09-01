import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVolume0 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="M12 6.385c0-.887-1.069-1.335-1.7-.714L7.667 8.257a1 1 0 0 1-.701.287H4a1 1 0 0 0-1 1v3.847a1 1 0 0 0 1 1h2.9a1 1 0 0 1 .702.287l2.697 2.65c.633.622 1.701.174 1.701-.713V6.385Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 10 4 4M19 10l-4 4"
    />
  </Svg>
);
export default SvgVolume0;
