import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQuote = (props) => (
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
      strokeWidth={1.5}
      d="M14 13.5h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5Zm0 0c0-6 1-7 4-9m-14 9h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm0 0c0-6 1-7 4-9"
    />
  </Svg>
);
export default SvgQuote;
