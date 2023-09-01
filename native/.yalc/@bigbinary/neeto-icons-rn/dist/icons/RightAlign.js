import * as React from "react";
import Svg, { G, Rect, Mask, Path, Defs, ClipPath } from "react-native-svg";
const SvgRightAlign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#RightAlign_svg__a)">
      <Rect
        width={11.571}
        height={3.857}
        x={1.5}
        y={11.333}
        fill="#68737D"
        rx={1}
      />
      <Mask id="RightAlign_svg__b" fill="#fff">
        <Rect width={9} height={3.857} x={4.071} y={6.19} rx={1} />
      </Mask>
      <Rect
        width={9}
        height={3.857}
        x={4.071}
        y={6.19}
        stroke="#68737D"
        strokeWidth={3}
        mask="url(#RightAlign_svg__b)"
        rx={1}
      />
      <Path stroke="#68737D" strokeWidth={1.5} d="M15.75 2.976v14.143" />
    </G>
    <Defs>
      <ClipPath id="RightAlign_svg__a">
        <Path fill="#fff" d="M0 .62h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRightAlign;
