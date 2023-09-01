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
const SvgNeetoAnalytics = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoAnalytics_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoAnalytics_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoAnalytics_svg__b)" rx={20} />
    </Mask>
    <G mask="url(#NeetoAnalytics_svg__c)">
      <Path
        fill="url(#NeetoAnalytics_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoAnalytics_svg__e)">
      <Path d="M9.474 17.634h2.491v4.36H9.474zM12.962 14.52h2.491v7.474h-2.491zM16.45 10.41h2.491v11.584H16.45V10.41Z" />
      <Path
        fillRule="evenodd"
        d="M23.916 24.24a1.351 1.351 0 0 1 1.9.19l4.405 5.39a1.351 1.351 0 0 1-2.092 1.71l-4.405-5.39a1.351 1.351 0 0 1 .192-1.9Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M26.321 19.119a6.007 6.007 0 0 0-5.939-6.007V10.41a8.71 8.71 0 1 1-7.615 13.06h3.404a5.984 5.984 0 0 0 4.143 1.656 5.974 5.974 0 0 0 3.553-1.162 5.997 5.997 0 0 0 2.454-4.845Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoAnalytics_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#63D9FE" />
        <Stop offset={0.799} stopColor="#8588FF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoAnalytics_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoAnalytics_svg__d"
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
export default SvgNeetoAnalytics;
