import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoInvisible = (props) => (
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
      d="M7 13h10M7 17h10M3 8h17.954M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z"
    />
  </Svg>
);
export default SvgNeetoInvisible;
