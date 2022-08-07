import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgNeutralFaceGrey = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#neutral-face-grey_svg__a)">
      <Path
        d="M20.153 12a8.25 8.25 0 0 1-8.25 8.25A8.25 8.25 0 0 1 3.653 12a8.25 8.25 0 0 1 8.25-8.25 8.25 8.25 0 0 1 8.25 8.25Z"
        stroke="#68737D"
        strokeWidth={1.5}
      />
      <Path
        d="M15.93 15.108a.49.49 0 0 1-.489.49H8.365a.49.49 0 0 1-.49-.49c0-.27.222-.49.49-.49h7.076a.49.49 0 0 1 .49.49ZM9.039 11.62a1.341 1.341 0 1 0 0-2.681 1.341 1.341 0 0 0 0 2.681Z"
        fill="#68737D"
      />
      <Path
        d="M9.79 9.596c-.117-.155-.293-.221-.394-.146-.101.075-.088.262.028.419.116.155.292.221.392.146.102-.075.09-.262-.027-.419Z"
        fill="#C2C8CC"
      />
      <Path
        d="M14.767 11.621a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68Z"
        fill="#68737D"
      />
      <Path
        d="M15.517 9.598c-.116-.156-.292-.221-.393-.146-.101.075-.089.262.027.418.117.156.293.221.393.146.102-.075.09-.262-.027-.418Z"
        fill="#C2C8CC"
      />
    </G>
    <Defs>
      <ClipPath id="neutral-face-grey_svg__a">
        <Path fill="#fff" transform="translate(2.903 3)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgNeutralFaceGrey;
