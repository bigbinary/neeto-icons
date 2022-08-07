import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAddMenu = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.374 12.5a.75.75 0 0 0-1.5 0v2.124H15.75a.75.75 0 0 0 0 1.5h2.124v2.124a.75.75 0 1 0 1.5 0v-2.124h2.124a.75.75 0 1 0 0-1.5h-2.124V12.5Z"
      fill="#68737D"
    />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M3.75 7.25h16.5M3.75 11.25h10.5M3.75 15.25h6.5"
    />
  </Svg>
);

export default SvgAddMenu;
