import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgAddCircle = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={8.25} stroke="#68737D" strokeWidth={1.5} />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M8.75 12.25h6.5M12.05 15.55v-6.5"
    />
  </Svg>
);

export default SvgAddCircle;
