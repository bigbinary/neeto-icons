import * as React from "react";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgNeetoPlanner = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoPlanner_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <Rect width={5.174} height={5.174} x={6} y={8} fill="#fff" rx={1.293} />
    <Rect width={5.174} height={5.174} x={11.82} y={8} fill="#fff" rx={1.293} />
    <Rect
      width={5.174}
      height={5.174}
      x={17.641}
      y={8}
      fill="#fff"
      rx={1.293}
    />
    <Rect
      width={5.174}
      height={5.174}
      x={23.462}
      y={8}
      fill="#fff"
      rx={1.293}
    />
    <Rect width={5.174} height={5.174} x={6} y={13.82} fill="#fff" rx={1.293} />
    <Rect
      width={5.174}
      height={5.174}
      x={11.82}
      y={13.82}
      fill="#fff"
      rx={1.293}
    />
    <Rect
      width={5.174}
      height={5.174}
      x={17.641}
      y={13.82}
      fill="#fff"
      rx={1.293}
    />
    <Rect
      width={5.174}
      height={5.174}
      x={6}
      y={19.641}
      fill="#fff"
      rx={1.293}
    />
    <Rect
      width={5.174}
      height={5.174}
      x={11.82}
      y={19.641}
      fill="#fff"
      rx={1.293}
    />
    <Rect
      width={5.174}
      height={5.174}
      x={6}
      y={25.462}
      fill="#fff"
      rx={1.293}
    />
    <Defs>
      <LinearGradient
        id="NeetoPlanner_svg__a"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4DC8C3" />
        <Stop offset={1} stopColor="#52A9C6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoPlanner;
