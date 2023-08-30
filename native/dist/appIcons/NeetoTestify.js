import * as React from "react";
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoTestify = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoTestify_svg__a)" rx={10.773} />
    <Mask
      id="NeetoTestify_svg__c"
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
        fill="url(#NeetoTestify_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoTestify_svg__c)">
      <Path
        fill="url(#NeetoTestify_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoTestify_svg__e)">
      <Path
        fill="#fff"
        d="m30.458 28.143-2.796-2.763a7.01 7.01 0 0 1-1.005 1.263c-.39.391-.82.73-1.277 1.014l2.812 2.778a1.61 1.61 0 0 0 2.271-.008l.007-.006c.63-.63.62-1.653-.012-2.278Z"
      />
      <Path
        stroke="#fff"
        strokeWidth={2.339}
        d="M27.953 19.123c0 4.87-3.973 8.83-8.889 8.83-4.915 0-8.889-3.96-8.889-8.83s3.974-8.83 8.89-8.83c4.915 0 8.888 3.96 8.888 8.83Z"
      />
      <Path
        fill="#fff"
        d="m22.32 15.652-1.035 1.027 1.917 2.385-1.917 2.389 1.035 1.027 2.71-3.416-2.71-3.412Zm-5.242 1.024-1.036-1.026-2.709 3.414 2.71 3.413 1.035-1.027-1.917-2.386 1.917-2.388Zm.641 6.014h1.462l1.462-7.251h-1.462L17.72 22.69Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoTestify_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF27A" />
        <Stop offset={0.823} stopColor="#FF9E45" />
      </LinearGradient>
      <LinearGradient
        id="NeetoTestify_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoTestify_svg__d"
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
export default SvgNeetoTestify;
