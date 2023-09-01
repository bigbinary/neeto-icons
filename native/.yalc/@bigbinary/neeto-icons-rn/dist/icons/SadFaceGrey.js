import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgSadFaceGrey = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#sad-face-grey_svg__a)">
      <Path
        stroke="#68737D"
        strokeWidth={1.5}
        d="M20.057 12a8.25 8.25 0 0 1-8.25 8.25A8.25 8.25 0 0 1 3.557 12a8.25 8.25 0 0 1 8.25-8.25 8.25 8.25 0 0 1 8.25 8.25Z"
      />
      <Path
        fill="#68737D"
        d="M15.117 12.344a1.413 1.413 0 1 0 0-2.825 1.413 1.413 0 0 0 0 2.825Z"
      />
      <Path
        fill="#C2C8CC"
        d="M15.63 10.053c-.215-.096-.44-.06-.502.079-.062.14.062.33.278.426.216.096.441.06.503-.079.062-.14-.063-.33-.278-.426Z"
      />
      <Path
        fill="#68737D"
        d="M8.496 12.344a1.412 1.412 0 1 0 0-2.825 1.412 1.412 0 0 0 0 2.825Z"
      />
      <Path
        fill="#C2C8CC"
        d="M9.008 10.052c-.216-.096-.44-.06-.503.08-.061.14.063.33.279.426.216.096.44.06.503-.08.062-.139-.063-.33-.279-.426Z"
      />
      <Path
        fill="#68737D"
        d="M15.493 16.283a.422.422 0 1 1-.578.615 4.541 4.541 0 0 0-6.217 0 .422.422 0 0 1-.578-.615 5.385 5.385 0 0 1 7.373 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="sad-face-grey_svg__a">
        <Path fill="#fff" d="M2.807 3h18v18h-18z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSadFaceGrey;
