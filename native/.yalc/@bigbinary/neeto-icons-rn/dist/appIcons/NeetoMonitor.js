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
const SvgNeetoMonitor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoMonitor_svg__a)" rx={10.773} />
    <Mask
      id="NeetoMonitor_svg__c"
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
        fill="url(#NeetoMonitor_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoMonitor_svg__c)">
      <Path
        fill="url(#NeetoMonitor_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoMonitor_svg__e)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M28.551 18.035a8.8 8.8 0 0 1 .22 1.965v8.772h-17.39l7.566-7.566 2.472 2.472a1.053 1.053 0 0 0 1.489 0l5.643-5.643Zm-.678-1.907a.936.936 0 0 0-.23.17l-5.48 5.478-2.471-2.472a1.053 1.053 0 0 0-1.489 0l-6.975 6.975V11.228H20a8.772 8.772 0 0 1 7.873 4.9Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoMonitor_svg__a"
        x1={-27.544}
        x2={68.947}
        y1={-30.175}
        y2={82.398}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.161} stopColor="#17FFD5" />
        <Stop offset={0.568} stopColor="#46B5C5" />
      </LinearGradient>
      <LinearGradient
        id="NeetoMonitor_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoMonitor_svg__d"
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
export default SvgNeetoMonitor;
