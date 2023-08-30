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
const SvgNeetoPlanner = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoPlanner_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoPlanner_svg__b"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="#E5E5E5" rx={10.773} />
    </Mask>
    <Mask
      id="NeetoPlanner_svg__d"
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
        fill="url(#NeetoPlanner_svg__c)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoPlanner_svg__d)">
      <Path
        fill="url(#NeetoPlanner_svg__e)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <Rect
      width={4.235}
      height={4.235}
      x={10.753}
      y={10.753}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={15.517}
      y={10.752}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={20.282}
      y={10.752}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={25.047}
      y={10.752}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={10.752}
      y={15.518}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={15.517}
      y={15.518}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={20.282}
      y={15.518}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={10.752}
      y={20.282}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={15.517}
      y={20.282}
      fill="#fff"
      rx={1.059}
    />
    <Rect
      width={4.235}
      height={4.235}
      x={10.752}
      y={25.047}
      fill="#fff"
      rx={1.059}
    />
    <Defs>
      <LinearGradient
        id="NeetoPlanner_svg__a"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4DC8C3" />
        <Stop offset={1} stopColor="#52A9C6" />
      </LinearGradient>
      <LinearGradient
        id="NeetoPlanner_svg__c"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8886FF" />
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoPlanner_svg__e"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.12} />
        <Stop offset={0.345} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoPlanner;
