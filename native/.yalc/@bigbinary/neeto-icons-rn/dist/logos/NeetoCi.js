import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCi = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoCI_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoCI_svg__b)">
      <Path
        fill="#fff"
        d="M29.463 12H10.537a.822.822 0 0 0-.823.823v18.926c0 .455.368.822.823.822h18.926a.822.822 0 0 0 .823-.822V12.823a.822.822 0 0 0-.823-.823Zm-9.435 10.443-4.937 4.14a.204.204 0 0 1-.337-.157v-1.613c0-.059.029-.118.075-.156l2.823-2.371-2.823-2.371a.198.198 0 0 1-.075-.157v-1.612c0-.175.203-.27.337-.157l4.937 4.137c.1.083.1.234 0 .317Zm5.218 3.983c0 .113-.088.205-.193.205h-4.757c-.106 0-.193-.092-.193-.205V25.19c0-.113.087-.205.193-.205h4.757c.105 0 .193.092.193.205v1.235Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCI_svg__a"
        x1={40}
        x2={-22.857}
        y1={48.143}
        y2={-24.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF85B8" />
        <Stop offset={1} stopColor="#EF8F59" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoCi;
