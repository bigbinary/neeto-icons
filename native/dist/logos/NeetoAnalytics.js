import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoAnalytics = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoAnalytics_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoAnalytics_svg__b)">
      <Path d="M8.571 18.987h2.705v4.734H8.571zM12.358 15.606h2.705v8.115h-2.705zM16.145 11.143h2.706V23.72h-2.706V11.143Z" />
      <Path
        fillRule="evenodd"
        d="M24.251 26.158a1.467 1.467 0 0 1 2.064.208l4.782 5.851a1.467 1.467 0 1 1-2.271 1.857l-4.782-5.852a1.467 1.467 0 0 1 .207-2.064Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M26.863 20.599a6.522 6.522 0 0 0-6.448-6.522v-2.934a9.456 9.456 0 1 1-8.268 14.18h3.695a6.497 6.497 0 0 0 4.498 1.798 6.487 6.487 0 0 0 3.858-1.262 6.511 6.511 0 0 0 2.665-5.26Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoAnalytics_svg__a"
        x1={40}
        x2={5}
        y1={59}
        y2={-3.143}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8588FF" />
        <Stop offset={1} stopColor="#63D9FE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoAnalytics;
