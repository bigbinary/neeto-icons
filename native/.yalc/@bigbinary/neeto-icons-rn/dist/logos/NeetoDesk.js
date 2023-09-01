import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoDesk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#NeetoDesk_svg__a)">
      <Path
        fill="url(#NeetoDesk_svg__b)"
        d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
      />
      <G fill="#fff" filter="url(#NeetoDesk_svg__c)">
        <Path d="M9.511 20.341h4.231c1.169 0 2.116.939 2.116 2.096v3.144c0 1.736-1.42 3.144-3.173 3.144-1.753 0-3.174-1.408-3.174-3.144v-5.24ZM24.32 22.437c0-1.157.948-2.096 2.116-2.096h4.231v5.24c0 1.736-1.42 3.144-3.173 3.144-1.753 0-3.173-1.408-3.173-3.144v-3.144ZM9.563 20.341c.531-5.296 5.041-9.432 10.526-9.432 5.485 0 9.995 4.136 10.526 9.432h-2.129c-.52-4.136-4.081-7.336-8.397-7.336-4.315 0-7.876 3.2-8.397 7.336H9.563Z" />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="NeetoDesk_svg__b"
        x1={21.308}
        x2={21.122}
        y1={56.075}
        y2={4.673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FD9437" />
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <ClipPath id="NeetoDesk_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoDesk;
