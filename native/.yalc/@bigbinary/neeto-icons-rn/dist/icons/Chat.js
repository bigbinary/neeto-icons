import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChat = (props) => (
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
      d="M14.812 15 12.9 17.55c-.45.6-1.35.6-1.8 0L9.188 15M15 15h3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9ZM7 21h10"
    />
  </Svg>
);
export default SvgChat;
