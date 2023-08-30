import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextItalic = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6h7m-3.5 0-3 12 3-12Zm.5 12H7h7Z"
    />
  </Svg>
);
export default SvgTextItalic;
