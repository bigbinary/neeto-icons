import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloseCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#F56A58"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 9l6 6M9 15l6-6"
    />
  </Svg>
);
export default SvgCloseCircle;
