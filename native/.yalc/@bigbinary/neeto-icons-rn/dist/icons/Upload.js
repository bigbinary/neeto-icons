import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUpload = (props) => (
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
      d="M12 17V3m9 14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4M17 8.001 11.999 3l-5 5.001"
    />
  </Svg>
);
export default SvgUpload;
