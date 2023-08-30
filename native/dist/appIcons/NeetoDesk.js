import * as React from "react";
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoDesk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoDesk_svg__a)" rx={10.773} />
    <Mask
      id="NeetoDesk_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoDesk_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoDesk_svg__c)">
      <Path
        fill="url(#NeetoDesk_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoDesk_svg__e)">
      <Path d="M9.333 20.143h4.24c1.172 0 2.121.94 2.121 2.1v3.152c0 1.74-1.424 3.15-3.18 3.15-1.757 0-3.181-1.41-3.181-3.15v-5.252ZM24.176 22.243c0-1.16.95-2.1 2.12-2.1h4.241v5.252c0 1.74-1.424 3.15-3.18 3.15-1.757 0-3.181-1.41-3.181-3.15v-3.152Z" />
      <Path d="M9.385 20.143c.532-5.308 5.052-9.454 10.55-9.454 5.498 0 10.018 4.146 10.55 9.454H28.35c-.522-4.145-4.09-7.353-8.416-7.353-4.325 0-7.894 3.208-8.416 7.353H9.385Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoDesk_svg__a"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD55C" />
        <Stop offset={1} stopColor="#FD9437" />
      </LinearGradient>
      <LinearGradient
        id="NeetoDesk_svg__b"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8886FF" />
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoDesk_svg__d"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.531} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoDesk;
