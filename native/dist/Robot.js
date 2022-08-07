import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgRobot = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.071 6.619a7.715 7.715 0 0 1 6.858 7.667V22H4.5v-7.714c0-3.971 3-7.241 6.857-7.667V4h1.714v2.619Zm5.143 13.667v-6a6 6 0 0 0-12 0v6h12Zm-6-1.715a4.286 4.286 0 1 1 0-8.571 4.286 4.286 0 0 1 0 8.571Zm0-1.714a2.572 2.572 0 1 0 0-5.143 2.572 2.572 0 0 0 0 5.143Zm0-1.714a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.714Z"
      fill="#68737D"
    />
    <Circle cx={12.2} cy={3.5} r={1.5} fill="#68737D" />
  </Svg>
);

export default SvgRobot;
