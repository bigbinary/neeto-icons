import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReply = (props) => (
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
      d="M9.28 13.56 5 9.28 9.28 5"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.177 9.44h8.239c1.373 0 4.119.942 4.119 4.708v4.12"
    />
  </Svg>
);
export default SvgReply;
