import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgSmileFaceGrey = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#smile-face-grey_svg__a)">
      <Path
        stroke="#68737D"
        strokeWidth={1.5}
        d="M20.25 12A8.25 8.25 0 0 1 12 20.25 8.25 8.25 0 0 1 3.75 12 8.25 8.25 0 0 1 12 3.75 8.25 8.25 0 0 1 20.25 12Z"
      />
      <Path
        fill="#68737D"
        d="M15.31 12.344a1.413 1.413 0 1 0 0-2.825 1.413 1.413 0 0 0 0 2.825Z"
      />
      <Path
        fill="#C2C8CC"
        d="M15.824 10.053c-.216-.096-.441-.06-.503.079-.062.14.063.33.279.426.215.096.44.06.502-.079.062-.14-.063-.33-.278-.426Z"
      />
      <Path
        fill="#68737D"
        d="M8.689 12.344a1.412 1.412 0 1 0 0-2.825 1.412 1.412 0 0 0 0 2.825Z"
      />
      <Path
        fill="#C2C8CC"
        d="M9.202 10.052c-.216-.096-.441-.06-.503.08s.062.33.278.426c.216.096.441.06.503-.08.062-.139-.062-.33-.278-.426Z"
      />
      <Path
        fill="#68737D"
        d="M8.313 15.553a.423.423 0 1 1 .579-.615 4.54 4.54 0 0 0 6.216 0 .422.422 0 0 1 .579.615 5.385 5.385 0 0 1-7.374 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="smile-face-grey_svg__a">
        <Path fill="#fff" d="M3 3h18v18H3z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSmileFaceGrey;
