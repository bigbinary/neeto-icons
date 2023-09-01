import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgMergedPullRequest = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Circle cx={7} cy={7} r={2.25} stroke="#107154" strokeWidth={1.5} />
    <Circle cx={7} cy={17} r={2.25} stroke="#107154" strokeWidth={1.5} />
    <Circle cx={17} cy={17} r={2.25} stroke="#107154" strokeWidth={1.5} />
    <Path
      stroke="#107154"
      strokeWidth={1.5}
      d="M7 9v6M12.5 7H16a1 1 0 0 1 1 1v7"
    />
    <Path stroke="#107154" strokeWidth={1.5} d="M14.5 5 12 7l2 1.6.5.4" />
  </Svg>
);
export default SvgMergedPullRequest;
