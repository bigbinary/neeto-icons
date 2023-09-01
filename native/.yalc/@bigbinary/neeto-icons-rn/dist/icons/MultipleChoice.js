import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMultipleChoice = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5h8M12 12h8M12 19h8"
    />
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M3.75 2.25h4.5v4.5h-4.5zM3.75 9.75h4.5v4.5h-4.5zM3.75 17.25h4.5v4.5h-4.5z"
    />
  </Svg>
);
export default SvgMultipleChoice;
