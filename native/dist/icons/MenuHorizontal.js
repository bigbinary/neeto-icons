import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuHorizontal = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#68737D"
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
);
export default SvgMenuHorizontal;
