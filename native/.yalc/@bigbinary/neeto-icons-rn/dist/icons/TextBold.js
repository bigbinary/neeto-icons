import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextBold = (props) => (
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
      d="M7 6h5.875a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7V6Zm0 6h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7v-6Z"
    />
  </Svg>
);
export default SvgTextBold;
