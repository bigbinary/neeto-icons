import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAddRectangle = (props) => (
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
      d="M19 11V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5m6.5-1.5v6m-3-3h6"
    />
  </Svg>
);
export default SvgAddRectangle;
