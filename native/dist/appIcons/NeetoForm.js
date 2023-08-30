import * as React from "react";
import Svg, {
  G,
  Rect,
  Mask,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgNeetoForm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#NeetoForm_svg__a)">
      <Rect width={40} height={40} fill="url(#NeetoForm_svg__b)" rx={10.753} />
      <Mask
        id="NeetoForm_svg__c"
        width={40}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          masktype: "alpha",
        }}
      >
        <Rect width={40} height={40} fill="#E5E5E5" rx={10.753} />
      </Mask>
      <Mask
        id="NeetoForm_svg__e"
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
          fill="url(#NeetoForm_svg__d)"
          rx={10.753}
        />
      </Mask>
      <G mask="url(#NeetoForm_svg__e)">
        <Path
          fill="url(#NeetoForm_svg__f)"
          d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
        />
      </G>
      <Rect
        width={13.498}
        height={3.681}
        x={15.858}
        y={18.182}
        fill="#fff"
        rx={1.841}
      />
      <Rect
        width={10.43}
        height={3.681}
        x={15.858}
        y={24.318}
        fill="#fff"
        rx={1.841}
      />
      <Rect
        width={9.817}
        height={3.681}
        x={15.858}
        y={12.047}
        fill="#fff"
        rx={1.841}
      />
      <Circle cx={12.484} cy={13.887} r={1.841} fill="#fff" />
      <Circle cx={12.484} cy={20.023} r={1.841} fill="#fff" />
      <Circle cx={12.484} cy={26.159} r={1.841} fill="#fff" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoForm_svg__b"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FE8072" />
        <Stop offset={1} stopColor="#F97290" />
      </LinearGradient>
      <LinearGradient
        id="NeetoForm_svg__d"
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
        id="NeetoForm_svg__f"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.375} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="NeetoForm_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoForm;
