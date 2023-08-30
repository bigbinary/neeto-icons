import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPause = (props) => (
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
      strokeWidth={2}
      d="M9 6v11M15 6v11"
    />
  </Svg>
);
export default SvgPause;
