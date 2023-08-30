import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDownArrow = (props) => (
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
      d="M6.023 13.507 12 19.483l5.977-5.976M12.01 4.51v14.98V4.51Z"
    />
  </Svg>
);
export default SvgDownArrow;
