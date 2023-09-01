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
const SvgNeetoEngage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoEngage_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoEngage_svg__c"
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
        fill="url(#NeetoEngage_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoEngage_svg__c)">
      <Path
        fill="url(#NeetoEngage_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoEngage_svg__e)"
    >
      <Path d="M23.303 11.052a9.377 9.377 0 1 0-3.588 18.04.608.608 0 1 1 0 1.215 10.592 10.592 0 1 1 10.592-10.592.608.608 0 1 1-1.216 0 9.377 9.377 0 0 0-5.788-8.663Z" />
      <Path d="M9.692 16.387c0-.336.272-.608.607-.608h18.713a.608.608 0 1 1 0 1.216H10.3a.608.608 0 0 1-.607-.608ZM9.693 23.043c0-.336.272-.608.607-.608h9.415a.608.608 0 1 1 0 1.216H10.3a.608.608 0 0 1-.607-.608Z" />
      <Path d="M18.238 9.52a2.954 2.954 0 0 1 4.035 1.08 17.777 17.777 0 0 1 2.488 9.117.608.608 0 0 1-1.216-.003 16.561 16.561 0 0 0-2.323-8.504 1.739 1.739 0 0 0-3.012 0l-.003.006a16.73 16.73 0 0 0 0 17l.002.004a1.75 1.75 0 0 0 1.51.873.608.608 0 0 1-.004 1.215 2.964 2.964 0 0 1-2.557-1.476 17.945 17.945 0 0 1 0-18.231 2.953 2.953 0 0 1 1.08-1.08Z" />
      <Path d="M26.323 30.76a4.437 4.437 0 1 0 0-8.874 4.437 4.437 0 0 0 0 8.874Zm-1.938-3.433a1.4 1.4 0 0 1 .99-.41h2.057a1.4 1.4 0 0 1 1.4 1.4v.514a.37.37 0 1 1-.741 0v-.514a.659.659 0 0 0-.659-.659h-2.058a.658.658 0 0 0-.658.659v.514a.37.37 0 1 1-.741 0v-.514a1.4 1.4 0 0 1 .41-.99Zm1.36-2.242a.658.658 0 1 1 1.317 0 .658.658 0 0 1-1.317 0Zm.658-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoEngage_svg__a"
        x1={-11.597}
        x2={28.578}
        y1={-22.007}
        y2={61.502}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#10AADB" />
        <Stop offset={1} stopColor="#96BAFF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoEngage_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoEngage_svg__d"
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
export default SvgNeetoEngage;
