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
const SvgNeetoRunner = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoRunner_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoRunner_svg__c"
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
        fill="url(#NeetoRunner_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoRunner_svg__c)">
      <Path
        fill="url(#NeetoRunner_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoRunner_svg__e)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m19.145 9.708-1.411 1.411-6.579 6.579-2.266 2.266 2.266 2.267 6.579 6.578 1.411 1.412v-4.533l-5.723-5.724 5.723-5.723V9.707Zm1.71 15.98 5.723-5.724-5.723-5.724V9.708l1.411 1.411 6.579 6.579 2.266 2.266-2.266 2.267-6.579 6.578-1.411 1.412v-4.533Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoRunner_svg__a"
        x1={-2.825}
        x2={44.094}
        y1={-3.819}
        y2={45.263}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#79B3F7" />
        <Stop offset={1} stopColor="#4B47FF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoRunner_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoRunner_svg__d"
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
export default SvgNeetoRunner;
