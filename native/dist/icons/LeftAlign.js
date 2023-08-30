import * as React from "react";
import Svg, { G, Rect, Mask, Path, Defs, ClipPath } from "react-native-svg";
const SvgLeftAlign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <G clipPath="url(#LeftAlign_svg__a)">
      <Rect
        width={11.571}
        height={3.857}
        x={4.5}
        y={11.333}
        fill="#68737D"
        rx={1}
      />
      <Mask id="LeftAlign_svg__b" fill="#fff">
        <Rect width={9} height={3.857} x={4.5} y={6.19} rx={1} />
      </Mask>
      <Rect
        width={9}
        height={3.857}
        x={4.5}
        y={6.19}
        stroke="#68737D"
        strokeWidth={3}
        mask="url(#LeftAlign_svg__b)"
        rx={1}
      />
      <Path stroke="#68737D" strokeWidth={1.5} d="M2.25 2.976v14.143" />
    </G>
    <Defs>
      <ClipPath id="LeftAlign_svg__a">
        <Path fill="#fff" d="M0 .62h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLeftAlign;
