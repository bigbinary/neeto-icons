import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgSadFaceGrey = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#sad-face-grey_svg__a)">
      <Path
        d="M20.057 12a8.25 8.25 0 0 1-8.25 8.25A8.25 8.25 0 0 1 3.557 12a8.25 8.25 0 0 1 8.25-8.25 8.25 8.25 0 0 1 8.25 8.25Z"
        stroke="#68737D"
        strokeWidth={1.5}
      />
      <Path
        d="M15.117 12.344a1.413 1.413 0 1 0 0-2.825 1.413 1.413 0 0 0 0 2.825Z"
        fill="#68737D"
      />
      <Path
        d="M15.63 10.053c-.215-.096-.44-.06-.502.079-.062.14.062.33.278.426.216.096.441.06.503-.079.062-.14-.063-.33-.278-.426Z"
        fill="#C2C8CC"
      />
      <Path
        d="M8.496 12.344a1.412 1.412 0 1 0 0-2.825 1.412 1.412 0 0 0 0 2.825Z"
        fill="#68737D"
      />
      <Path
        d="M9.008 10.052c-.216-.096-.44-.06-.503.08-.061.14.063.33.279.426.216.096.44.06.503-.08.062-.139-.063-.33-.279-.426Z"
        fill="#C2C8CC"
      />
      <Path
        d="M15.493 16.283a.422.422 0 1 1-.578.615 4.541 4.541 0 0 0-6.217 0 .422.422 0 0 1-.578-.615 5.385 5.385 0 0 1 7.373 0Z"
        fill="#68737D"
      />
    </G>
    <Defs>
      <ClipPath id="sad-face-grey_svg__a">
        <Path fill="#fff" transform="translate(2.807 3)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgSadFaceGrey;
