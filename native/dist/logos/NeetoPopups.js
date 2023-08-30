import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoPopups = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoPopups_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoPopups_svg__b)">
      <Path d="m20 32.502-2.412-2.347h4.824L20 32.502Z" />
      <Path
        fillRule="evenodd"
        d="M20 10.857c5.365 0 9.714 4.35 9.714 9.714v9.715H10.286V10.857H20Zm-4.368 6.78a.522.522 0 0 0 0 1.044h8.606a.522.522 0 0 0 0-1.043h-8.606Zm-.522 3c0-.288.234-.522.522-.522h8.606a.522.522 0 0 1 0 1.043h-8.606a.522.522 0 0 1-.522-.521Zm.522 2.086a.522.522 0 0 0 0 1.043h4.172a.522.522 0 0 0 0-1.043h-4.172Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoPopups_svg__a"
        x1={40}
        x2={-6.857}
        y1={48.143}
        y2={-9.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#59B9EF" />
        <Stop offset={1} stopColor="#3EA8CA" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoPopups;
