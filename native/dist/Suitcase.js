import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSuitcase = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 21H5v0a2 2 0 0 1-2-2v-9 0a2 2 0 0 1 2-2h14v0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2s0 0 0 0v0Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 21V6a2 2 0 0 0-2-2h-4v0a2 2 0 0 0-2 2v15"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSuitcase;
