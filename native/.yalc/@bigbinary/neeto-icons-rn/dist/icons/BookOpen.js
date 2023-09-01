import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBookOpen = (props) => (
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
      d="M9 9.757a14.56 14.56 0 0 0-3-.64m9 4.64a14.56 14.56 0 0 1 3-.64l-3 .64Zm-9-.639c1.054.117 2.039.321 3 .64l-3-.64Zm12-4a14.496 14.496 0 0 0-3 .64l3-.64Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.13V20m0-13.87C9.406 4.679 7.088 4.1 4.017 4A.995.995 0 0 0 3 5v11.854c0 .54.433.99.974.998 3.092.046 5.42.616 8.026 2.148 2.606-1.532 4.934-2.102 8.026-2.148a.996.996 0 0 0 .974-1V5a.995.995 0 0 0-1.017-1c-3.071.1-5.389.678-7.983 2.13v0Z"
    />
  </Svg>
);
export default SvgBookOpen;
