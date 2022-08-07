import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgSmileFaceGrey = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#smile-face-grey_svg__a)">
      <Path
        d="M20.25 12A8.25 8.25 0 0 1 12 20.25 8.25 8.25 0 0 1 3.75 12 8.25 8.25 0 0 1 12 3.75 8.25 8.25 0 0 1 20.25 12Z"
        stroke="#68737D"
        strokeWidth={1.5}
      />
      <Path
        d="M15.31 12.344a1.413 1.413 0 1 0 0-2.825 1.413 1.413 0 0 0 0 2.825Z"
        fill="#68737D"
      />
      <Path
        d="M15.824 10.053c-.216-.096-.441-.06-.503.079-.062.14.063.33.279.426.215.096.44.06.502-.079.062-.14-.063-.33-.278-.426Z"
        fill="#C2C8CC"
      />
      <Path
        d="M8.689 12.344a1.412 1.412 0 1 0 0-2.825 1.412 1.412 0 0 0 0 2.825Z"
        fill="#68737D"
      />
      <Path
        d="M9.202 10.052c-.216-.096-.441-.06-.503.08s.062.33.278.426c.216.096.441.06.503-.08.062-.139-.062-.33-.278-.426Z"
        fill="#C2C8CC"
      />
      <Path
        d="M8.313 15.553a.423.423 0 1 1 .579-.615 4.54 4.54 0 0 0 6.216 0 .422.422 0 0 1 .579.615 5.385 5.385 0 0 1-7.374 0Z"
        fill="#68737D"
      />
    </G>
    <Defs>
      <ClipPath id="smile-face-grey_svg__a">
        <Path fill="#fff" transform="translate(3 3)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgSmileFaceGrey;
