import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserAdd = (props) => (
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
      d="M12.5 15H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M19.374 12.15a.75.75 0 0 0-1.5 0v2.124H15.75a.75.75 0 0 0 0 1.5h2.124v2.124a.75.75 0 1 0 1.5 0v-2.124h2.124a.75.75 0 1 0 0-1.5h-2.124V12.15Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUserAdd;
