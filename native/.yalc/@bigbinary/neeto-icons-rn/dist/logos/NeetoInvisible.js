import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoInvisible = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoInvisible_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoInvisible_svg__b)">
      <Path
        fillRule="evenodd"
        d="M15.63 11.255a6.662 6.662 0 0 0 0 13.323v.97a7.63 7.63 0 1 1 7.632-7.631h-.97a6.662 6.662 0 0 0-6.661-6.662Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M15.63 14.404a3.513 3.513 0 0 0 0 7.025v.969a4.482 4.482 0 1 1 4.482-4.482h-.969a3.513 3.513 0 0 0-3.512-3.512Z"
        clipRule="evenodd"
      />
      <Path d="M15.497 18.412a.302.302 0 0 1 .387-.387l15.76 5.731a.302.302 0 0 1-.002.569l-7.202 2.564a.302.302 0 0 0-.184.186l-2.462 7.083a.302.302 0 0 1-.569.004l-5.728-15.75Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoInvisible_svg__a"
        x1={43.143}
        x2={-13}
        y1={51.857}
        y2={-21.429}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#28CCF0" />
        <Stop offset={0.699} stopColor="#799DFA" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoInvisible;
