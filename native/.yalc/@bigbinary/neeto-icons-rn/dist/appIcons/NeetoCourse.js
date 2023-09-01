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
const SvgNeetoCourse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoCourse_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoCourse_svg__c"
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
        fill="url(#NeetoCourse_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoCourse_svg__c)">
      <Path
        fill="url(#NeetoCourse_svg__d)"
        d="M37.42 22.366c0-10.215-8.281-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoCourse_svg__e)">
      <Path
        fillRule="evenodd"
        d="M20.03 10.058a8.1 8.1 0 0 1 8.101 8.101v8.101H11.93V10.058h8.1Zm3.62 3.565a.81.81 0 0 0-.811.81v9.18a.81.81 0 0 0 1.62 0v-9.18a.81.81 0 0 0-.81-.81Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M16.401 25.612c0-.358.29-.648.649-.648H25.7a2.43 2.43 0 0 1 0 4.86H11.93v-1.808h1.296v.512h12.475a1.134 1.134 0 0 0 0-2.268H17.05a.648.648 0 0 1-.649-.648Z"
        clipRule="evenodd"
      />
      <Path d="M27.052 25.288h1.08v2.16h-1.08v-2.16Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCourse_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8CD672" />
        <Stop offset={1} stopColor="#59CBEF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCourse_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCourse_svg__d"
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
export default SvgNeetoCourse;
