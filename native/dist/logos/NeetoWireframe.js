import * as React from "react";
import Svg, {
  Path,
  G,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoWireframe = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoWireframe_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoWireframe_svg__b)">
      <Rect width={12.985} height={5.224} x={17.015} y={11.714} rx={0.512} />
      <Rect width={12.985} height={12.985} x={10} y={18.729} rx={0.512} />
      <Circle cx={12.612} cy={14.326} r={2.612} />
      <Rect
        width={12.985}
        height={5.224}
        x={24.776}
        y={31.714}
        rx={0.512}
        transform="rotate(-90 24.776 31.714)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoWireframe_svg__a"
        x1={43.143}
        x2={6.286}
        y1={51.857}
        y2={-3.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6A67E8" />
        <Stop offset={0.699} stopColor="#B49AFC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoWireframe;
