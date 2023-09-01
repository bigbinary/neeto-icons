import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoRunner = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoRunner_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoRunner_svg__b)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m19.12 9.429-1.451 1.455-6.767 6.78L8.572 20l2.33 2.336 6.767 6.78 1.452 1.455V25.9L13.234 20l5.887-5.9V9.43Zm1.759 16.47L26.766 20l-5.887-5.9V9.43l1.452 1.455 6.767 6.78L31.428 20l-2.33 2.336-6.767 6.78-1.452 1.455V25.9Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoRunner_svg__a"
        x1={43.143}
        x2={6.286}
        y1={51.857}
        y2={-3.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B47FF" />
        <Stop offset={0.699} stopColor="#79B3F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoRunner;
