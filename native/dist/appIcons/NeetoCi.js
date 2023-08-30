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
const SvgNeetoCi = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoCI_svg__a)" rx={10.773} />
    <Mask
      id="NeetoCI_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoCI_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoCI_svg__c)">
      <Path
        fill="url(#NeetoCI_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoCI_svg__e)">
      <Path
        fill="#fff"
        d="M29.577 9.59H10.423a.832.832 0 0 0-.832.833v19.154c0 .46.372.832.832.832h19.154c.46 0 .832-.372.832-.832V10.423a.832.832 0 0 0-.832-.832ZM20.029 20.16l-4.997 4.19a.207.207 0 0 1-.34-.16v-1.63c0-.06.028-.12.075-.16L17.624 20l-2.857-2.4a.199.199 0 0 1-.076-.158V15.81c0-.177.206-.273.341-.159l4.997 4.188a.206.206 0 0 1 0 .32Zm5.28 4.03c0 .115-.089.209-.195.209h-4.815c-.106 0-.195-.094-.195-.208v-1.25c0-.114.089-.207.195-.207h4.815c.106 0 .195.093.195.208v1.249Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCI_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EF8F59" />
        <Stop offset={0.76} stopColor="#FF85B8" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCI_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoCI_svg__d"
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
export default SvgNeetoCi;
