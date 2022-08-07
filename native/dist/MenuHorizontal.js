import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenuHorizontal = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMenuHorizontal;
