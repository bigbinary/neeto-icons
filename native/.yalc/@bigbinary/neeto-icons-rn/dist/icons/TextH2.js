import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextH2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 14a1 1 0 0 1 1-1h.614a1.229 1.229 0 0 1 .933 2.028L17 18h3M5 6v12m8-12v12m-8-6h8"
    />
  </Svg>
);
export default SvgTextH2;
