import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLoading = (props) => (
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
      d="M21 12h-3M3 12h3M12 3v3M12 21v-3M18.364 18.364l-2.12-2.121M5.636 5.636l2.121 2.121M16.243 7.757l2.121-2.121M7.757 16.243l-2.12 2.121"
    />
  </Svg>
);
export default SvgLoading;
