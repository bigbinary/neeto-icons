import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoGit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#_NeetoGit_svg__a)"
      d="M140 70c0-38.66-31.34-70-70-70H0v140h140V70Z"
    />
    <G filter="url(#_NeetoGit_svg__b)">
      <Path
        fill="#fff"
        d="M36 36h22.214v17.16a7.257 7.257 0 0 0 0 13.772v13.124a7.253 7.253 0 1 0 4.533 0V66.944a7.244 7.244 0 0 0 2.54-1.45l7.758 4.48a7.253 7.253 0 1 0 2.235-3.945l-7.692-4.44a7.257 7.257 0 0 0-4.84-8.441V36H70c18.778 0 34 15.222 34 34v34H36V36Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="_NeetoGit_svg__a"
        x1={216.5}
        x2={-80}
        y1={256}
        y2={-86.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF4E6E" />
        <Stop offset={0.696} stopColor="#FF8B8B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoGit;
