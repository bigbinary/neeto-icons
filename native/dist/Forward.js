import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgForward = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.259 13.56 4.281-4.28L14.259 5"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.363 9.44H9.12C7.747 9.44 5 10.382 5 14.148v4.12"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgForward;
