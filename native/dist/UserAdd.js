import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUserAdd = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 15H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.374 12.15a.75.75 0 0 0-1.5 0v2.124H15.75a.75.75 0 0 0 0 1.5h2.124v2.124a.75.75 0 1 0 1.5 0v-2.124h2.124a.75.75 0 1 0 0-1.5h-2.124V12.15Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgUserAdd;
