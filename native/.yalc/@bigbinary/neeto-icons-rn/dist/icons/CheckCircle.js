import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#00BA88"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
    />
    <Path
      stroke="#00BA88"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.44 12.339 2.167 2.167-.02-.02 4.88-4.89"
    />
  </Svg>
);
export default SvgCheckCircle;
