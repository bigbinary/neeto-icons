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
const SvgNeetoChangelog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoChangelog_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoChangelog_svg__c"
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
        fill="url(#NeetoChangelog_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoChangelog_svg__c)">
      <Path
        fill="url(#NeetoChangelog_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoChangelog_svg__e)">
      <Rect width={2.027} height={13.138} x={24.522} y={13.333} rx={1.014} />
      <Path
        fillRule="evenodd"
        d="M27.602 21.747a1.291 1.291 0 0 0 1.754-1.206v-.887a1.291 1.291 0 0 0-1.754-1.206v3.299Z"
        clipRule="evenodd"
      />
      <Path d="M13.612 21.797a1.27 1.27 0 0 1 .119-.707c.59-1.21 2.41-.79 2.41.555v5.611a.931.931 0 0 1-1.855.112l-.674-5.57Z" />
      <Path
        fillRule="evenodd"
        d="M11.261 17.198a.78.78 0 0 0-.618.763v4.181a.78.78 0 0 0 .634.766l4.863.93v-7.675l-4.879 1.035Zm5.932-1.258v8.098l7.33 1.4V14.386l-7.33 1.554Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoChangelog_svg__a"
        x1={-2.825}
        x2={44.094}
        y1={-3.819}
        y2={45.263}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#FF8787" />
        <Stop offset={0.79} stopColor="#FFA768" />
      </LinearGradient>
      <LinearGradient
        id="NeetoChangelog_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoChangelog_svg__d"
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
export default SvgNeetoChangelog;
