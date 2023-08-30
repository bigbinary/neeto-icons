import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUndo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2F3941"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.684 12.684v0A6.316 6.316 0 1 0 12 6.368H6.474M8.842 4 6.474 6.368M8.842 8.737 6.474 6.368"
    />
  </Svg>
);
export default SvgUndo;
