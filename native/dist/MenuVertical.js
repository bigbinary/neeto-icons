import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenuVertical = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 18a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMenuVertical;
