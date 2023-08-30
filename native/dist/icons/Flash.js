import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2F3941"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.925 3v6.794l4.661.01-6.926 10.181v-6.794L6 13.181 12.925 3Z"
    />
  </Svg>
);
export default SvgFlash;
