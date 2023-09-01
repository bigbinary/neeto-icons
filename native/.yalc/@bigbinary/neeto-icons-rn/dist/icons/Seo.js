import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSeo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.456 9.757-3.419 3.42-2.28-2.28-2.279 2.28"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 20-3.25-3.25m-.003-10.563a7.467 7.467 0 1 1-10.56 10.56 7.467 7.467 0 0 1 10.56-10.56v0Z"
    />
  </Svg>
);
export default SvgSeo;
