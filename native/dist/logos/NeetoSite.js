import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoSite_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoSite_svg__b)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m28.447 11.173.028-.03H9.462c-.65 0-1.176.527-1.176 1.177v1.307h16.213v.262H8.286v13.99c0 .65.527 1.177 1.176 1.177h20.79c.65 0 1.177-.527 1.177-1.177V14.044l-2.982-2.871Zm-.639.663-5.748 5.968 3.095 2.98 5.748-5.968-3.095-2.98Zm-6.37 6.647-1.024 4.127 4.086-1.178-3.063-2.95ZM10.246 12.45a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Zm.785.393a.392.392 0 1 0 0-.785.392.392 0 0 0 0 .785Zm1.569-.393a.392.392 0 1 1-.785 0 .392.392 0 0 1 .785 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSite_svg__a"
        x1={-4.286}
        x2={57.857}
        y1={-11}
        y2={70.857}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.374} stopColor="#8176FF" />
        <Stop offset={1} stopColor="#41BBFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoSite;
