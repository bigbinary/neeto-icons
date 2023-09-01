import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoStore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoStore_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoStore_svg__b)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M20 10.286c5.365 0 9.714 4.349 9.714 9.714v9.714H10.286V10.286H20Zm-4.145 4.792a.777.777 0 1 0-1.554 0 5.699 5.699 0 0 0 11.398 0 .777.777 0 1 0-1.554 0 4.145 4.145 0 1 1-8.29 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoStore_svg__a"
        x1={43.143}
        x2={6.286}
        y1={51.857}
        y2={-3.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3C5BFF" />
        <Stop offset={0.699} stopColor="#55ABE9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoStore;
