import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKeyboard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 9H6a3 3 0 1 1 3-3v3ZM9 9h6v6H9V9ZM6 21a3 3 0 1 1 0-6h3v3a3 3 0 0 1-3 3ZM15 15h3a3 3 0 1 1-3 3v-3ZM18 3a3 3 0 1 1 0 6h-3V6a3 3 0 0 1 3-3Z"
    />
  </Svg>
);
export default SvgKeyboard;
