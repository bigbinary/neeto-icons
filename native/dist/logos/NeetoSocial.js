import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSocial = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoSocial_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoSocial_svg__b)">
      <Path
        fill="#fff"
        d="M31.092 15.703a4.002 4.002 0 0 0-4.007-3.989H13.15a4 4 0 0 0-4.007 4.012l.034 10.665a4 4 0 0 0 4.007 3.987h3.95l1.88 2.696a1.353 1.353 0 0 0 2.217.004l1.9-2.699h3.988a3.998 3.998 0 0 0 4.007-4.01l-.034-10.666Zm-10.958-1.611a3.738 3.738 0 1 1 0 7.475 3.738 3.738 0 0 1 0-7.476Zm5.952 13.063a.834.834 0 0 1-.834.834H15.014a.835.835 0 0 1-.835-.835 3.785 3.785 0 0 1 3.78-3.793h4.35c1.006 0 1.964.401 2.674 1.112a3.788 3.788 0 0 1 1.103 2.682Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSocial_svg__a"
        x1={48.143}
        x2={-6.857}
        y1={59.857}
        y2={-9.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#81D2F4" />
        <Stop offset={1} stopColor="#4A9CE9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoSocial;
