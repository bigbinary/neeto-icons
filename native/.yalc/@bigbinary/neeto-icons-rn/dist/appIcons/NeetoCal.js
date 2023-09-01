import * as React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCal = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoCal_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoCal_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Path fill="url(#NeetoCal_svg__b)" d="M0 0h40v40H0z" />
    </Mask>
    <G mask="url(#NeetoCal_svg__c)">
      <Path
        fill="url(#NeetoCal_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoCal_svg__e)">
      <Rect width={2.31} height={2.31} x={14.34} y={20.689} rx={0.234} />
      <Rect width={2.31} height={2.31} x={14.34} y={23.692} rx={0.234} />
      <Rect width={2.31} height={2.31} x={17.343} y={17.685} rx={0.234} />
      <Rect width={2.31} height={2.31} x={17.343} y={20.689} rx={0.234} />
      <Rect width={2.31} height={2.31} x={17.343} y={23.692} rx={0.234} />
      <Rect width={2.31} height={2.31} x={20.346} y={17.685} rx={0.234} />
      <Rect width={2.31} height={2.31} x={23.35} y={17.685} rx={0.234} />
      <Rect width={2.31} height={2.31} x={20.346} y={20.689} rx={0.234} />
      <Rect width={2.31} height={2.31} x={20.346} y={23.692} rx={0.234} />
      <Rect width={2.31} height={2.31} x={23.35} y={20.689} rx={0.234} />
      <Rect width={1.733} height={3.234} x={15.148} y={10.292} rx={0.866} />
      <Rect width={1.733} height={3.234} x={23.119} y={10.292} rx={0.866} />
      <Path
        fillRule="evenodd"
        d="M22.772 11.679h-5.544v.982a1.213 1.213 0 0 1-2.426 0v-.982h-1.118a3.041 3.041 0 0 0-3.04 3.04v11.939a3.04 3.04 0 0 0 3.04 3.04h12.632a3.04 3.04 0 0 0 3.04-3.04V14.719c0-1.679-1.36-3.04-3.04-3.04h-1.118v.982a1.213 1.213 0 0 1-2.426 0v-.982Zm-9.35 4.62a.468.468 0 0 0-.469.468v10.154c0 .258.21.468.468.468h13.157c.259 0 .468-.21.468-.468V16.767a.468.468 0 0 0-.468-.468H13.421Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCal_svg__a"
        x1={7.76}
        x2={43.841}
        y1={-17.328}
        y2={69.105}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.156} stopColor="#FFCDA5" />
        <Stop offset={0.795} stopColor="#EE4D5F" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCal_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCal_svg__d"
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
export default SvgNeetoCal;
