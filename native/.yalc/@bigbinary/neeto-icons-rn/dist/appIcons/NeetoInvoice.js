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
const SvgNeetoInvoice = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoInvoice_svg__a)" rx={10.753} />
    <Mask
      id="NeetoInvoice_svg__b"
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
      id="NeetoInvoice_svg__d"
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
        fill="url(#NeetoInvoice_svg__c)"
        rx={10.753}
      />
    </Mask>
    <G mask="url(#NeetoInvoice_svg__d)">
      <Path
        fill="url(#NeetoInvoice_svg__e)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoInvoice_svg__f)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M28.177 26.773V11.43a.201.201 0 0 0-.201-.202H12.014a.201.201 0 0 0-.201.202v15.343c0 .059.025.114.07.153l2.525 2.189a.201.201 0 0 0 .264 0l2.464-2.135a.202.202 0 0 1 .264 0l2.463 2.135a.201.201 0 0 0 .264 0l2.464-2.135a.202.202 0 0 1 .264 0l2.463 2.135a.201.201 0 0 0 .264 0l2.526-2.19a.202.202 0 0 0 .07-.152ZM13.45 15.046c0-.602.489-1.09 1.091-1.09h7.092a1.091 1.091 0 1 1 0 2.181H14.54a1.09 1.09 0 0 1-1.09-1.09Zm1.091 2.728a1.09 1.09 0 1 0 0 2.182h10.91a1.09 1.09 0 1 0 0-2.182H14.54Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoInvoice_svg__a"
        x1={20}
        x2={18.187}
        y1={0}
        y2={72.398}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#72DAE0" />
        <Stop offset={1} stopColor="#46A0D3" />
      </LinearGradient>
      <LinearGradient
        id="NeetoInvoice_svg__c"
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
        id="NeetoInvoice_svg__e"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.375} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoInvoice;
