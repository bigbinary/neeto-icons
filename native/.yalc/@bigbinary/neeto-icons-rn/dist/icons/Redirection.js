import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRedirection = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.295 26.605a10.707 10.707 0 1 1-2.586-21.26m-1.536 5.73L14.9 4.637l-6.44-1.725m14.076 21.495.004-.013m-2.51-18.3.004-.012m4.4 3.36.004-.013m2.127 5.097.003-.012m-.684 5.49.003-.013"
    />
  </Svg>
);
export default SvgRedirection;
