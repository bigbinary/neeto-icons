import * as React from "react";
import Svg, {
  Path,
  Mask,
  Rect,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoWireframe = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoWireframe_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoWireframe_svg__c"
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
        fill="url(#NeetoWireframe_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoWireframe_svg__c)">
      <Path
        fill="url(#NeetoWireframe_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoWireframe_svg__e)">
      <Rect width={11.239} height={4.521} x={17.416} y={11.345} rx={0.209} />
      <Rect width={11.239} height={11.239} x={11.345} y={17.416} rx={0.209} />
      <Circle cx={13.606} cy={13.606} r={2.261} />
      <Rect
        width={11.239}
        height={4.521}
        x={24.134}
        y={28.655}
        rx={0.209}
        transform="rotate(-90 24.134 28.655)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoWireframe_svg__a"
        x1={-2.825}
        x2={44.094}
        y1={-3.819}
        y2={45.263}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#B49AFC" />
        <Stop offset={1} stopColor="#6A67E8" />
      </LinearGradient>
      <LinearGradient
        id="NeetoWireframe_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoWireframe_svg__d"
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
export default SvgNeetoWireframe;
