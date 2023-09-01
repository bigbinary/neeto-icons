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
const SvgNeetoStore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoStore_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoStore_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoStore_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoStore_svg__c)">
      <Path
        fill="url(#NeetoStore_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoStore_svg__e)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M20.702 11.228A8.772 8.772 0 0 1 29.474 20v8.772H11.93V11.228h8.772Zm-3.743 4.328a.702.702 0 1 0-1.403 0 5.146 5.146 0 1 0 10.292 0 .702.702 0 0 0-1.403 0 3.743 3.743 0 0 1-7.486 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoStore_svg__a"
        x1={-8.07}
        x2={42.515}
        y1={-31.287}
        y2={49.474}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3C5BFF" />
        <Stop offset={0.733} stopColor="#55ABE9" />
      </LinearGradient>
      <LinearGradient
        id="NeetoStore_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoStore_svg__d"
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
export default SvgNeetoStore;
