import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSend = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSend;
