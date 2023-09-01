import * as React from "react";
import Svg, {
  G,
  Rect,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#NeetoChat_svg__a)">
      <Rect width={40} height={40} fill="url(#NeetoChat_svg__b)" rx={10.773} />
      <Mask
        id="NeetoChat_svg__d"
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
          fill="url(#NeetoChat_svg__c)"
          rx={10.773}
        />
      </Mask>
      <G mask="url(#NeetoChat_svg__d)">
        <Path
          fill="url(#NeetoChat_svg__e)"
          d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
        />
        <G filter="url(#NeetoChat_svg__f)">
          <Path
            fill="#fff"
            d="M17.892 10.753h4.216a8.5 8.5 0 0 1 5.96 2.429 8.225 8.225 0 0 1 2.47 5.864c0 2.2-.889 4.309-2.47 5.864a8.501 8.501 0 0 1-5.96 2.43v3.628c-5.27-2.074-12.646-5.184-12.646-11.922 0-1.09.218-2.168.642-3.174a8.285 8.285 0 0 1 1.828-2.69 8.44 8.44 0 0 1 2.734-1.798 8.55 8.55 0 0 1 3.226-.631Z"
          />
        </G>
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="NeetoChat_svg__b"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8886FF" />
        <Stop offset={1} stopColor="#9B72E7" />
      </LinearGradient>
      <LinearGradient
        id="NeetoChat_svg__c"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8886FF" />
        <Stop offset={1} stopColor="#9B72E7" />
      </LinearGradient>
      <LinearGradient
        id="NeetoChat_svg__e"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.1} />
        <Stop offset={0.964} stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="NeetoChat_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoChat;
