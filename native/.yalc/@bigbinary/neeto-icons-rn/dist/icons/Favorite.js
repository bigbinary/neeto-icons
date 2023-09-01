import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFavorite = (props) => (
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
      d="M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20c-.16 0-9-4.61-9-10.24C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71.69-.8 1.88-1.71 3.7-1.71Z"
    />
  </Svg>
);
export default SvgFavorite;
