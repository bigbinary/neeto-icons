import * as React from "react";
import Svg, {
  Path,
  Mask,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoSite_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoSite_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoSite_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoSite_svg__c)">
      <Path
        fill="url(#NeetoSite_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoSite_svg__e)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m27.625 11.956.026-.026H10.643c-.581 0-1.052.471-1.052 1.052v1.17h14.503v.234H9.59v12.515c0 .58.47 1.052 1.052 1.052H29.24c.581 0 1.052-.471 1.052-1.052V14.525l-2.667-2.569Zm-.571.594-5.142 5.338 2.769 2.666 5.141-5.338-2.768-2.666Zm-5.699 5.945-.915 3.692 3.655-1.053-2.74-2.639ZM11.345 13.1a.35.35 0 1 1-.702 0 .35.35 0 0 1 .702 0Zm.702.351a.35.35 0 1 0 0-.702.35.35 0 0 0 0 .702Zm1.403-.35a.35.35 0 1 1-.701 0 .35.35 0 0 1 .701 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSite_svg__a"
        x1={15.965}
        x2={64.678}
        y1={15.79}
        y2={88.713}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8176FF" />
        <Stop offset={1} stopColor="#41BBFF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSite_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSite_svg__d"
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
export default SvgNeetoSite;
