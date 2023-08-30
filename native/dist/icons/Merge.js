import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMerge = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 8 4 4m0 0-4 4m4-4h-5.394m0 0A6.736 6.736 0 0 1 10 9a6.737 6.737 0 0 0-5.606-3H3m12.606 6A6.736 6.736 0 0 0 10 15a6.736 6.736 0 0 1-5.606 3H3"
    />
  </Svg>
);
export default SvgMerge;
