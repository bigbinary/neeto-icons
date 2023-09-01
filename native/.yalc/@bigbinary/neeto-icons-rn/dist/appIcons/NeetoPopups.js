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
const SvgNeetoPopups = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoPopups_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoPopups_svg__c"
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
        fill="url(#NeetoPopups_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoPopups_svg__c)">
      <Path
        fill="url(#NeetoPopups_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoPopups_svg__e)">
      <Path d="m19.942 30.643-2.164-2.105h4.327l-2.163 2.105Z" />
      <Path
        fillRule="evenodd"
        d="M19.942 11.228a8.714 8.714 0 0 1 8.713 8.714v8.713H11.228V11.228h8.714Zm-3.919 6.082a.468.468 0 0 0 0 .936h7.72a.468.468 0 0 0 0-.936h-7.72ZM15.556 20c0-.258.209-.468.467-.468h7.72a.468.468 0 0 1 0 .936h-7.72a.468.468 0 0 1-.467-.468Zm.467 1.871a.468.468 0 0 0 0 .936h3.743a.468.468 0 0 0 0-.936h-3.743Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoPopups_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3EA8CA" />
        <Stop offset={1} stopColor="#59B9EF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoPopups_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoPopups_svg__d"
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
export default SvgNeetoPopups;
