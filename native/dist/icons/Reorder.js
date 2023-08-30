import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReorder = (props) => (
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
      d="m14 6-2-2-2 2M10 18l2 2 2-2"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.75 9.25h12.722M5.75 12.25h12.722M5.75 15.25h12.722"
    />
  </Svg>
);
export default SvgReorder;
