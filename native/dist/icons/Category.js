import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCategory = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 12 5.333-5.333m0 0L14.667 12M9.333 6.667v18.666M28 20l-5.333 5.333m0 0L17.333 20m5.334 5.333V6.667"
    />
  </Svg>
);
export default SvgCategory;
