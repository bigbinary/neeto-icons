import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextH1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 6v12m8-12v12m-8-6h8m5.5 6v-5l-1.25 1.25M20 18h-3"
    />
  </Svg>
);
export default SvgTextH1;
