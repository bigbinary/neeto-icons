import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgUnlock = (props) => (
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
      d="m14.976 7.184-1.299 2.35c.37.457.668.962.888 1.496l1.724-3.121a3.75 3.75 0 1 0-6.565-3.627l-1.021 1.85 1.322.708 1.012-1.832a2.25 2.25 0 1 1 3.94 2.176Z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={15} r={1.5} fill="#68737D" />
  </Svg>
);
export default SvgUnlock;
