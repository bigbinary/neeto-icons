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
const SvgNeetoReplay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoReplay_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoReplay_svg__c"
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
        fill="url(#NeetoReplay_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoReplay_svg__c)">
      <Path
        fill="url(#NeetoReplay_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoReplay_svg__e)">
      <Path d="M23.767 19.93a.452.452 0 0 1 0 .784l-5.476 3.162a.452.452 0 0 1-.679-.392V17.16c0-.348.377-.565.679-.391l5.476 3.162ZM28.335 14.947a.398.398 0 0 1-.454.454l-3.125-.485a.398.398 0 0 1-.22-.674l2.64-2.64a.398.398 0 0 1 .674.22l.485 3.125Z" />
      <Path
        fillRule="evenodd"
        d="M20.273 12.037c-4.473 0-8.098 3.586-8.098 8.01 0 4.425 3.625 8.012 8.098 8.012a8.106 8.106 0 0 0 7.32-4.579 1.004 1.004 0 0 1 1.331-.468.984.984 0 0 1 .474 1.317 10.107 10.107 0 0 1-9.125 5.708c-5.577 0-10.098-4.472-10.098-9.99 0-5.516 4.521-9.989 10.098-9.989 2.825 0 5.38 1.15 7.212 2.999a.982.982 0 0 1-.014 1.398 1.007 1.007 0 0 1-1.414-.014 8.114 8.114 0 0 0-5.784-2.405Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoReplay_svg__a"
        x1={-2.825}
        x2={44.094}
        y1={-3.819}
        y2={45.263}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#83D6AE" />
        <Stop offset={1} stopColor="#20C7BD" />
      </LinearGradient>
      <LinearGradient
        id="NeetoReplay_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoReplay_svg__d"
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
export default SvgNeetoReplay;
