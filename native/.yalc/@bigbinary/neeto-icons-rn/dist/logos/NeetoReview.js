import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoReview = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoReview_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoReview_svg__b)"
    >
      <Path d="M27.553 22.21a3.138 3.138 0 1 0-.072 4.507.776.776 0 0 1 .102-.1 3.137 3.137 0 0 0-.03-4.407Zm1.542 4.958a4.654 4.654 0 1 0-1.08 1.064l2.406 2.405a.758.758 0 0 0 1.071-1.072l-2.397-2.397Z" />
      <Path d="m14.297 26.455 3.436 3.436 3.01-3.01a5.17 5.17 0 0 1 6.153-7.447v-3.287a3.436 3.436 0 0 0-3.436-3.436H12.007a3.436 3.436 0 0 0-3.436 3.436v6.872a3.436 3.436 0 0 0 3.436 3.436h2.29Zm-1.996-9.256c0-.419.34-.758.758-.758h7.853a.757.757 0 0 1 0 1.515H13.06a.757.757 0 0 1-.758-.757Zm.758 2.047a.757.757 0 1 0 0 1.515h3.365a.757.757 0 0 0 0-1.515H13.06Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoReview_svg__a"
        x1={40}
        x2={-6.857}
        y1={48.143}
        y2={-9.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#59CBEF" />
        <Stop offset={1} stopColor="#54CCAF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoReview;
