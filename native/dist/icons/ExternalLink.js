import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExternalLink = (props) => (
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
      d="M7 17 17 7M7 7h10v10"
    />
  </Svg>
);
export default SvgExternalLink;
