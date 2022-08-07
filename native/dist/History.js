import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgHistory = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#History_svg__a)"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <Path d="M7.32 17.634a8 8 0 1 0-2.002-3.4" strokeLinejoin="round" />
      <Path d="m7.501 12.068-2.51 2.49-2.49-2.511" strokeLinejoin="round" />
      <Path d="M12.5 8v4.5l3 2.5" />
    </G>
    <Defs>
      <ClipPath id="History_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgHistory;
