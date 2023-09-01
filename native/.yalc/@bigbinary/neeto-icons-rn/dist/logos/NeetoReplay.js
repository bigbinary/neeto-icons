import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoReplay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoReplay_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoReplay_svg__b)">
      <Path d="M24.493 21.353a.504.504 0 0 1 0 .874l-6.336 3.658a.504.504 0 0 1-.757-.437v-7.316c0-.389.42-.631.757-.437l6.336 3.658ZM29.717 15.616a.457.457 0 0 1-.522.521l-3.59-.557a.457.457 0 0 1-.252-.775l3.032-3.032a.457.457 0 0 1 .775.253l.557 3.59Z" />
      <Path
        fillRule="evenodd"
        d="M20.456 12.272c-5.137 0-9.302 4.12-9.302 9.203 0 5.082 4.165 9.202 9.302 9.202a9.311 9.311 0 0 0 8.408-5.259 1.154 1.154 0 0 1 1.53-.538c.573.269.817.947.545 1.513a11.61 11.61 0 0 1-10.483 6.557c-6.406 0-11.599-5.138-11.599-11.475C8.857 15.137 14.05 10 20.457 10a11.63 11.63 0 0 1 8.285 3.444 1.128 1.128 0 0 1-.017 1.607c-.453.439-1.18.432-1.624-.017a9.321 9.321 0 0 0-6.645-2.762Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoReplay_svg__a"
        x1={59.571}
        x2={-8.857}
        y1={70}
        y2={-15.429}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.344} stopColor="#20C7BD" />
        <Stop offset={0.699} stopColor="#83D6AE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoReplay;
