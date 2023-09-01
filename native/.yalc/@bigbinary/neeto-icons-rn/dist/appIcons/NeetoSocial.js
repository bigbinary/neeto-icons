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
const SvgNeetoSocial = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoSocial_svg__a)" rx={10.773} />
    <Mask
      id="NeetoSocial_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect
        width={40}
        height={40}
        fill="url(#NeetoSocial_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoSocial_svg__c)">
      <Path
        fill="url(#NeetoSocial_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoSocial_svg__e)">
      <Path
        fill="#fff"
        d="M30.034 13.614a3.685 3.685 0 0 0-3.69-3.672h-12.83a3.683 3.683 0 0 0-3.69 3.693l.032 9.82a3.684 3.684 0 0 0 3.69 3.672h3.636l1.731 2.481a1.246 1.246 0 0 0 2.042.004l1.75-2.485h3.67a3.681 3.681 0 0 0 3.69-3.691l-.03-9.822Zm-10.09-1.484a3.442 3.442 0 1 1 0 6.884 3.442 3.442 0 0 1 0-6.884Zm5.482 12.028a.768.768 0 0 1-.769.769h-9.426a.769.769 0 0 1-.77-.77 3.485 3.485 0 0 1 3.481-3.492h4.006a3.479 3.479 0 0 1 3.477 3.493Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSocial_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A9CE9" />
        <Stop offset={1} stopColor="#81D2F4" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSocial_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSocial_svg__d"
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
export default SvgNeetoSocial;
