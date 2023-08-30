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
const SvgNeetoCrm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoCRM_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoCRM_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoCRM_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoCRM_svg__c)">
      <Path
        fill="url(#NeetoCRM_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoCRM_svg__e)"
    >
      <Path d="M15.69 18.746a1.773 1.773 0 1 0-2.508 2.508 1.773 1.773 0 0 0 2.507-2.508Zm1.427-1.428a3.792 3.792 0 1 0-5.363 5.364 3.792 3.792 0 0 0 5.363-5.364ZM26.818 13.182a1.773 1.773 0 1 0-2.507 2.507 1.773 1.773 0 0 0 2.507-2.507Zm1.428-1.428a3.792 3.792 0 1 0-5.363 5.363 3.792 3.792 0 0 0 5.363-5.363ZM26.818 24.31a1.773 1.773 0 1 0-2.507 2.508 1.773 1.773 0 0 0 2.507-2.508Zm1.428-1.427a3.792 3.792 0 1 0-5.363 5.363 3.792 3.792 0 0 0 5.363-5.363Z" />
      <Path d="M23.991 15.218a1.01 1.01 0 0 1-.451 1.355l-6.177 3.088a1.01 1.01 0 1 1-.903-1.806l6.177-3.088a1.01 1.01 0 0 1 1.354.451ZM16.009 20.79c.249-.499.855-.701 1.354-.452l6.177 3.089a1.01 1.01 0 1 1-.903 1.806l-6.177-3.088a1.01 1.01 0 0 1-.451-1.355Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCRM_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.305} stopColor="#75DCFD" />
        <Stop offset={0.931} stopColor="#597DEF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCRM_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCRM_svg__d"
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
export default SvgNeetoCrm;
