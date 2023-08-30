import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuVertical = (props) => (
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
      d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 18a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
    />
  </Svg>
);
export default SvgMenuVertical;
