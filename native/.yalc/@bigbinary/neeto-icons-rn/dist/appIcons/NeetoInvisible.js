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
const SvgNeetoInvisible = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoInvisible_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoInvisible_svg__c"
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
        fill="url(#NeetoInvisible_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoInvisible_svg__c)">
      <Path
        fill="url(#NeetoInvisible_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoInvisible_svg__e)">
      <Path
        fillRule="evenodd"
        d="M16.644 10.312a6.566 6.566 0 1 0 0 13.131v.955a7.52 7.52 0 1 1 7.52-7.52h-.955a6.566 6.566 0 0 0-6.565-6.566Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M16.644 13.416a3.462 3.462 0 1 0 0 6.924v.954a4.417 4.417 0 1 1 4.417-4.416h-.956a3.462 3.462 0 0 0-3.461-3.462Z"
        clipRule="evenodd"
      />
      <Path d="M16.512 17.366a.298.298 0 0 1 .381-.382l15.533 5.65a.298.298 0 0 1-.002.56l-7.098 2.527a.298.298 0 0 0-.182.183l-2.426 6.98a.298.298 0 0 1-.561.005l-5.645-15.523Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoInvisible_svg__a"
        x1={-2.825}
        x2={44.094}
        y1={-3.819}
        y2={45.263}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#799DFA" />
        <Stop offset={1} stopColor="#28CCF0" />
      </LinearGradient>
      <LinearGradient
        id="NeetoInvisible_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoInvisible_svg__d"
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
export default SvgNeetoInvisible;
