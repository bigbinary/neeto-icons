import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlash = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.925 3v6.794l4.661.01-6.926 10.181v-6.794L6 13.181 12.925 3Z"
      stroke="#2F3941"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgFlash;
