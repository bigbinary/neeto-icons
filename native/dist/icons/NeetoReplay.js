import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoReplay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.206 9.115 14.9 11.3a.814.814 0 0 1 0 1.4l-3.695 2.185a.813.813 0 0 1-1.227-.7v-4.37a.814.814 0 0 1 1.228-.7v0Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.327 17.364-1.691 1a9 9 0 0 0 12.728 0c2.497-2.497 3.211-6.094 2.159-9.23m-3.85-2.498 1.691-1a9 9 0 0 0-12.728 0c-2.497 2.497-3.211 6.095-2.159 9.23"
    />
  </Svg>
);
export default SvgNeetoReplay;
