import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgList = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 5H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM20 13H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"
      stroke="#2F3941"
      strokeWidth={1.5}
    />
  </Svg>
);

export default SvgList;
