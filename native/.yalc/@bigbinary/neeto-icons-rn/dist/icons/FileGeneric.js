import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgFileGeneric = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G
      stroke="#4B2876"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#FileGeneric_svg__a)"
    >
      <Path d="M16 5v4a1 1 0 0 0 1 1h4" />
      <Path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7l-5-5H5a2 2 0 0 0-2 2v0Z" />
    </G>
    <Defs>
      <ClipPath id="FileGeneric_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgFileGeneric;
