import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilterAz = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.395 14.5h4.211l-4.211 5h4.211M21 9.5l-2.5-5-2.5 5M16.419 8.662h4.162M12 19.5H3M12 14.5H3M12 9.5H3M12 4.5H3"
    />
  </Svg>
);
export default SvgFilterAz;
