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
const SvgNeetoReview = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoReview_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoReview_svg__c"
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
        fill="url(#NeetoReview_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoReview_svg__c)">
      <Path
        fill="url(#NeetoReview_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoReview_svg__e)"
    >
      <Path d="M28.311 20.773a3.346 3.346 0 1 0-.076 4.805.814.814 0 0 1 .108-.106 3.346 3.346 0 0 0-.032-4.7Zm1.645 5.287a4.962 4.962 0 1 0-1.151 1.134l2.565 2.564a.808.808 0 0 0 1.142-1.142l-2.556-2.556Z" />
      <Path d="m14.177 25.299 3.664 3.664 3.209-3.21a5.513 5.513 0 0 1 6.561-7.94v-3.506a3.664 3.664 0 0 0-3.664-3.664H11.734a3.664 3.664 0 0 0-3.664 3.664v7.328a3.664 3.664 0 0 0 3.664 3.664h2.443Zm-2.129-9.87c0-.446.362-.808.808-.808h8.374a.807.807 0 1 1 0 1.615h-8.374a.808.808 0 0 1-.808-.807Zm.808 2.183a.808.808 0 0 0 0 1.615h3.589a.807.807 0 1 0 0-1.615h-3.59Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoReview_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#54CCAF" />
        <Stop offset={1} stopColor="#59CBEF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoReview_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoReview_svg__d"
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
export default SvgNeetoReview;
