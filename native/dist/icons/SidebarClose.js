import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const SvgSidebarClose = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#68737D" strokeWidth={1.5} clipPath="url(#SidebarClose_svg__a)">
      <Rect width={16.5} height={16.5} x={3.75} y={3.75} rx={3.25} />
      <Path d="M9 4v16" />
      <Path strokeLinecap="round" strokeLinejoin="round" d="m16 9-3 3 3 3" />
    </G>
    <Defs>
      <ClipPath id="SidebarClose_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSidebarClose;
