import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGitMerge = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8v8"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 8a4 4 0 0 0 4 4h4"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgGitMerge;
