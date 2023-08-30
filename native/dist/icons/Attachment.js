import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgAttachment = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#Attachment_svg__a)">
      <Path
        stroke="#49545C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.88 8.375-5.487 5.486a2.116 2.116 0 0 0 2.992 2.992l7.232-7.232a3.879 3.879 0 1 0-5.486-5.486L5.9 11.367a5.642 5.642 0 0 0 0 7.98 5.642 5.642 0 0 0 7.98 0l4.39-4.389"
      />
    </G>
    <Defs>
      <ClipPath id="Attachment_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAttachment;
