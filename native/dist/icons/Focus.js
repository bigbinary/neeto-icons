import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgFocus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={7.125} stroke="#68737D" strokeWidth={1.5} />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 12h4M17 12h4M12 21v-4M12 7V3"
    />
    <Circle cx={12} cy={12} r={1} fill="#68737D" />
  </Svg>
);
export default SvgFocus;
