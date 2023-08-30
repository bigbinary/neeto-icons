import * as React from "react";
import Svg, { G, Rect, Defs, ClipPath, Path } from "react-native-svg";
const SvgMenuLayout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#68737D" strokeWidth={1.5} clipPath="url(#MenuLayout_svg__a)">
      <Rect width={6} height={6} x={4} y={4} rx={1} />
      <Rect width={6} height={6} x={4} y={14} rx={1} />
      <Rect width={6} height={6} x={14} y={4} rx={1} />
      <Rect width={6} height={6} x={14} y={14} rx={1} />
    </G>
    <Defs>
      <ClipPath id="MenuLayout_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMenuLayout;
