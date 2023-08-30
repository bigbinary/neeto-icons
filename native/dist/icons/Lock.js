import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgLock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={15} r={5.25} stroke="#68737D" strokeWidth={1.5} />
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M14.25 9.436V6.75a2.25 2.25 0 0 0-4.5 0v2.686a5.994 5.994 0 0 0-1.5.88V6.75a3.75 3.75 0 1 1 7.5 0v3.566a5.995 5.995 0 0 0-1.5-.88Z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={15} r={1.5} fill="#68737D" />
  </Svg>
);
export default SvgLock;
