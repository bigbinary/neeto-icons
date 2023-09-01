import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTranslate = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.5v2M14.712 15.5a5.98 5.98 0 0 1-2.712-5M12 10.5a5.98 5.98 0 0 1-2.712 5"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5ZM15 10.5H9"
    />
  </Svg>
);
export default SvgTranslate;
