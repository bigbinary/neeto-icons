import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgClosedPullRequest = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={7} cy={7} r={2.25} stroke="#BB121A" strokeWidth={1.5} />
    <Circle cx={7} cy={17} r={2.25} stroke="#BB121A" strokeWidth={1.5} />
    <Circle cx={17} cy={17} r={2.25} stroke="#BB121A" strokeWidth={1.5} />
    <Path
      stroke="#BB121A"
      strokeWidth={1.5}
      d="M7 9v6M17 10v5M15 4.5l4 4M19 4.5l-4 4"
    />
  </Svg>
);
export default SvgClosedPullRequest;
