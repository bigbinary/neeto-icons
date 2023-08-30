import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgArchive = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Archive_svg__a)"
    >
      <Path d="M4.5 17.833v-2.916c0-.69.56-1.25 1.25-1.25h1.566c.331 0 .649.131.883.366l.813.813c.313.312.736.487 1.178.487h3.62c.441 0 .866-.175 1.178-.488l.691-.69a1.667 1.667 0 0 1 1.178-.488h1.393c.69 0 1.25.56 1.25 1.25v2.916c0 .92-.746 1.667-1.667 1.667H6.167c-.92 0-1.667-.746-1.667-1.667Z" />
      <Path d="M6.167 13.667v-7.5c0-.92.746-1.667 1.666-1.667h8.334c.92 0 1.666.746 1.666 1.667v7.5" />
    </G>
    <Defs>
      <ClipPath id="Archive_svg__a">
        <Path fill="#fff" d="M2 2h20v20H2z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgArchive;
